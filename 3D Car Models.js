<script>
document.getElementById('carSelector').addEventListener('change', function() {
  const selectedOption = this.options[this.selectedIndex];
  const modelPath = selectedOption.getAttribute('data-model');

  const viewer = document.getElementById('carViewer');
  if (modelPath) {
    viewer.src = 'models/' + modelPath; // adjust path if needed
  }
});
</script>
