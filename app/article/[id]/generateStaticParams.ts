
async function getAllArticleIds () {
  return ['123', '456'];
}

export async function generateStaticParams() {
  const ids = await getAllArticleIds();
  return ids.map(id => ({ id }));
}