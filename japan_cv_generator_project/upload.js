document.getElementById('cvUpload').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  console.log("Uploaded file:", file.name);
});