import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * ブログのMarkdownファイルを日付順にナンバリングするスクリプト
 * 形式: 001-元のファイル名.md, 002-元のファイル名.md, ...
 */

const blogDir = path.join(process.cwd(), "content/blog");

interface BlogFile {
  fileName: string;
  date: string;
  title: string;
}

function main() {
  if (!fs.existsSync(blogDir)) {
    console.error(`Directory not found: ${blogDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(blogDir).filter((name) => name.endsWith(".md"));
  console.log(`Found ${files.length} markdown files`);

  // ファイル情報を読み込んで日付順にソート
  const blogFiles: BlogFile[] = [];

  for (const file of files) {
    try {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      const date = data.date || "1970-01-01";
      const title = data.title || file.replace(/\.md$/, "");

      blogFiles.push({
        fileName: file,
        date: date,
        title: title,
      });
    } catch (error) {
      console.error(`Error reading ${file}:`, error);
    }
  }

  // 日付でソート（新しい順）
  blogFiles.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // 新しい順
  });

  console.log("\nRenaming files...\n");

  // ファイル名を変更
  for (let i = 0; i < blogFiles.length; i++) {
    const blogFile = blogFiles[i];
    const oldPath = path.join(blogDir, blogFile.fileName);
    
    // 既にナンバリングされている場合は番号部分を削除
    const baseFileName = blogFile.fileName.replace(/^\d+-/, "");
    const newFileName = `${String(i + 1).padStart(3, "0")}-${baseFileName}`;
    const newPath = path.join(blogDir, newFileName);

    // 既に同じ名前の場合はスキップ
    if (oldPath === newPath) {
      console.log(`✓ Skipped (already numbered): ${blogFile.fileName}`);
      continue;
    }

    try {
      fs.renameSync(oldPath, newPath);
      console.log(`✓ ${blogFile.fileName} → ${newFileName}`);
    } catch (error) {
      console.error(`✗ Failed to rename ${blogFile.fileName}:`, error);
    }
  }

  console.log(`\n✅ Renumbered ${blogFiles.length} files`);
}

main();
