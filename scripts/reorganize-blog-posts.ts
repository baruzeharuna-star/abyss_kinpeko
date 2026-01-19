import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

interface BlogPost {
  filename: string;
  date: string;
  category: string;
  content: string;
}

// カテゴリのマッピング（整理）
const categoryMap: Record<string, string> = {
  "未分類": "キンペコ",
  "アクアリウム": "キンペコ",
  "アクアリウムショップ": "キンペコ",
  "Aquarium Tallman": "キンペコ",
  "プレコ什器": "キンペコ",
  "水草水槽": "キンペコ",
  "ブセファランドラ": "キンペコ",
  "bloodline": "L333",
  "ブログ": "キンペコ",
  "L333": "L333",
  "キンペコ": "キンペコ",
};

function cleanContent(content: string): string {
  // 連続する空行を1行に
  let cleaned = content.replace(/\n{3,}/g, "\n\n");
  // フロントマター後の不要な空行を削除
  cleaned = cleaned.replace(/^---\n[\s\S]*?---\n\n+/m, (match) => {
    return match.replace(/\n+$/, "\n");
  });
  // 行末の空白を削除
  cleaned = cleaned.replace(/[ \t]+$/gm, "");
  return cleaned;
}

async function main() {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".md") && f !== ".gitkeep");
  const posts: BlogPost[] = [];

  // 全ファイルを読み込んで日付でソート
  for (const file of files) {
    if (file === ".md" || file === "-.md") continue; // 特殊なファイル名はスキップ
    
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: body } = matter(content);
    
    if (!data.date) {
      console.log(`Skipping ${file}: no date`);
      continue;
    }

    const newCategory = categoryMap[data.category as string] || "キンペコ";
    
    posts.push({
      filename: file,
      date: data.date as string,
      category: newCategory,
      content: cleanContent(body),
    });
  }

  // 日付順にソート
  posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  // 新しいファイル名で保存
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const newFilename = `${String(i + 1).padStart(3, "0")}.md`;
    const newFilePath = path.join(blogDir, newFilename);
    
    // フロントマターを再構築
    const frontMatter = {
      ...matter(fs.readFileSync(path.join(blogDir, post.filename), "utf8")).data,
      category: post.category,
    };
    
    const newContent = `---\n${Object.entries(frontMatter)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}: [${value.map(v => `"${v}"`).join(", ")}]`;
        }
        return `${key}: "${value}"`;
      })
      .join("\n")}\n---\n\n${post.content}`;
    
    // 古いファイルを削除（新しいファイル名と異なる場合）
    if (post.filename !== newFilename) {
      fs.unlinkSync(path.join(blogDir, post.filename));
    }
    
    fs.writeFileSync(newFilePath, newContent, "utf8");
    console.log(`${post.filename} -> ${newFilename} (${post.date}, ${post.category})`);
  }

  console.log(`\nReorganized ${posts.length} blog posts.`);
}

main().catch(console.error);
