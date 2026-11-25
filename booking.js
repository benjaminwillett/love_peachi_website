for (const button of document.querySelectorAll('[data-copy]')) {
  const address = document.getElementById(button.dataset.copy);
  const status = button.nextElementSibling;

  if (navigator.clipboard?.writeText) {
    button.hidden = false;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(address.value);
        status.textContent = 'Link copied.';
      } catch {
        address.focus();
        address.select();
        status.textContent = 'Copy the selected address and paste it into your browser.';
      }
    });
  }
}
