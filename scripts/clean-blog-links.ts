import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * ブログのMarkdownファイルからはてなブログのリンクを削除するスクリプト
 * - はてなブログのキーワードリンクを削除（テキストのみ残す）
 * - [clink url="..."] 形式のリンクを削除
 * - 画像（![alt](url) や <img> タグ）は残す
 */

const blogDir = path.join(process.cwd(), "content/blog");

function cleanHatenaLinks(content: string): string {
  // [clink url="..."] 形式のリンクを削除（複雑なパターンにも対応）
  // [clink url="[https://...](https://...)"] のような場合も対応
  content = content.replace(/\[clink\s+url=["'][^"']*["']\]/gi, "");

  // はてなブログのキーワードリンクを削除（テキストのみ残す）
  // [テキスト](https://d.hatena.ne.jp/keyword/...) → テキスト
  content = content.replace(
    /\[([^\]]+)\]\(https:\/\/d\.hatena\.ne\.jp\/keyword\/[^\)]+\)/g,
    "$1"
  );

  // その他のはてなブログのリンクパターンも削除
  // 画像リンク（![alt](url)）は除外して、通常のリンクのみ削除
  // 画像リンクを一時的に置き換えて保護
  const imagePlaceholders: string[] = [];
  let placeholderIndex = 0;
  
  // 画像リンクを保護
  content = content.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g, (match) => {
    const placeholder = `__IMAGE_PLACEHOLDER_${placeholderIndex}__`;
    imagePlaceholders.push(match);
    placeholderIndex++;
    return placeholder;
  });

  // はてなブログのリンクを削除
  content = content.replace(
    /\[([^\]]+)\]\(https:\/\/d\.hatena\.ne\.jp\/[^\)]+\)/g,
    "$1"
  );

  // 画像リンクを復元
  imagePlaceholders.forEach((image, index) => {
    content = content.replace(`__IMAGE_PLACEHOLDER_${index}__`, image);
  });

  // 段落の間に適切な改行を追加
  // 連続する改行を2つに統一し、段落の間に空行を確保
  content = content
    .replace(/\n{3,}/g, "\n\n") // 3つ以上の改行を2つに
    .replace(/([。！？])\n([^\n])/g, "$1\n\n$2") // 句点の後に改行を追加
    .replace(/([。！？])\s+([^\n])/g, "$1\n\n$2"); // 句点の後にスペースがある場合も改行に

  return content;
}

function cleanBlogFile(filePath: string): boolean {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // 本文からリンクを削除
    const cleanedContent = cleanHatenaLinks(content);

    // excerptからもリンクを削除
    const cleanedExcerpt = cleanHatenaLinks(data.excerpt || "");

    // frontmatterを再生成
    const frontmatter = `---
title: "${(data.title || "").replace(/"/g, '\\"')}"
date: "${data.date || ""}"
excerpt: "${cleanedExcerpt.replace(/"/g, '\\"')}"
category: "${(data.category || "未分類").replace(/"/g, '\\"')}"
tags: [${(data.tags || []).map((t: string) => `"${t.replace(/"/g, '\\"')}"`).join(", ")}]
---

${cleanedContent}
`;

    fs.writeFileSync(filePath, frontmatter, "utf-8");
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error);
    return false;
  }
}

function main() {
  if (!fs.existsSync(blogDir)) {
    console.error(`Directory not found: ${blogDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(blogDir).filter((name) => name.endsWith(".md"));
  console.log(`Found ${files.length} markdown files\n`);

  let cleaned = 0;
  let failed = 0;

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    if (cleanBlogFile(filePath)) {
      cleaned++;
      console.log(`✓ Cleaned: ${file}`);
    } else {
      failed++;
      console.error(`✗ Failed: ${file}`);
    }
  }

  console.log(`\n✅ Cleaned ${cleaned} files`);
  if (failed > 0) {
    console.error(`✗ Failed ${failed} files`);
  }
}

main();
