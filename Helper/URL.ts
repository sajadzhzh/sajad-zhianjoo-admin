export async function urlToFile(url: string): Promise<File> {
  const response = await fetch(url);
  const blob = await response.blob();

  const fileName = url.split("/").pop() || "image.webp";

  return new File([blob], fileName, {
    type: blob.type,
  });
}