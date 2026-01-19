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

// カテゴリ別のプレフィックス
const categoryPrefix: Record<string, string> = {
  "キンペコ": "blog",
  "L333": "blog", // L333もブログとして扱う
  "bloodline": "bloodline",
  "お知らせ": "announce",
};

async function main() {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".md"));
  const postsByCategory: Record<string, BlogPost[]> = {};

  // 全ファイルを読み込んでカテゴリ別に分類
  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: body } = matter(content);
    
    if (!data.date || !data.category) {
      console.log(`Skipping ${file}: missing date or category`);
      continue;
    }

    const category = data.category as string;
    const prefix = categoryPrefix[category] || "blog";
    
    if (!postsByCategory[prefix]) {
      postsByCategory[prefix] = [];
    }
    
    postsByCategory[prefix].push({
      filename: file,
      date: data.date as string,
      category: category,
      content: body,
    });
  }

  // 各カテゴリを日付順にソートしてリネーム
  for (const [prefix, posts] of Object.entries(postsByCategory)) {
    posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });

    // 新しいファイル名で保存
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const newFilename = `${prefix}-${String(i + 1).padStart(3, "0")}.md`;
      const newFilePath = path.join(blogDir, newFilename);
      
      // フロントマターを再構築
      const originalContent = fs.readFileSync(path.join(blogDir, post.filename), "utf8");
      const { data } = matter(originalContent);
      
      const frontMatter = `---\n${Object.entries(data)
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
      
      fs.writeFileSync(newFilePath, frontMatter, "utf8");
      console.log(`${post.filename} -> ${newFilename} (${post.date}, ${post.category})`);
    }
  }

  console.log(`\nReorganized ${Object.values(postsByCategory).flat().length} blog posts by category.`);
}

main().catch(console.error);
