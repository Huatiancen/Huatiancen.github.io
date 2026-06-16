const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');

const specs = [
  {
    course: '软件系统设计',
    source: '/Users/huatiancen/File/The_Third_Year_Of_Spring/Software_system_design/软件系统设计',
    target: path.join(repo, '_posts/courses/软件系统设计'),
  },
  {
    course: '软件质量管理',
    source: '/Users/huatiancen/File/The_Third_Year_Of_Spring/Software_Quality_Management/软件质量与管理',
    target: path.join(repo, '_posts/courses/软件质量管理'),
  },
];

function walkMd(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const sourcePath = path.join(dir, entry.name);
      const rel = path.join(prefix, entry.name);
      if (entry.isDirectory()) return walkMd(sourcePath, rel);
      if (entry.isFile() && entry.name.endsWith('.md')) return [rel];
      return [];
    })
    .sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'));
}

function postTitleFromRel(rel) {
  const parsed = path.parse(rel);
  const title = parsed.name;
  if (parsed.dir) {
    return `${parsed.dir.split(path.sep).join(' - ')} - ${title}`;
  }
  return title;
}

function fileTitle(title) {
  return title
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function assert(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

const failures = [];

for (const spec of specs) {
  var currentSourceRoot = spec.source;
  const sourceFiles = walkMd(spec.source);
  assert(fs.existsSync(spec.target), `${spec.course}: target directory is missing`);

  const targetFiles = fs.existsSync(spec.target)
    ? fs.readdirSync(spec.target).filter((name) => name.endsWith('.md'))
    : [];

  for (const rel of sourceFiles) {
    const title = postTitleFromRel(rel);
    const expectedName = `${fileTitle(title)}.md`;
    const matches = targetFiles.filter((name) => name.replace(/^\d{4}-\d{2}-\d{2}-/, '') === expectedName);
    assert(matches.length === 1, `${spec.course}: expected one blog post for "${title}", found ${matches.length}`);
    if (matches.length === 1) {
      const post = fs.readFileSync(path.join(spec.target, matches[0]), 'utf8');
      assert(post.includes(`tags: ['${spec.course}']`), `${matches[0]}: missing course tag`);
      assert(post.includes('toc: true'), `${matches[0]}: missing toc flag`);
    }
  }

  assert(targetFiles.length === sourceFiles.length, `${spec.course}: expected ${sourceFiles.length} posts, found ${targetFiles.length}`);
}

const postLayout = fs.readFileSync(path.join(repo, '_layouts/post.html'), 'utf8');
assert(postLayout.includes('post-shell'), 'post layout should wrap content and TOC in post-shell');
assert(postLayout.includes("include sidebar-right.html"), 'post layout should include sidebar-right.html');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Course imports and post TOC checks passed.');
