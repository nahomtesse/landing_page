document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    const codeBlock = document.getElementById('codeBlock');
  
    if (copyButton && codeBlock) {
      copyButton.addEventListener('click', function () {
        const textArea = document.createElement('textarea');
        textArea.value = codeBlock.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        copyButton.textContent = 'Copied!';
        setTimeout(() => (copyButton.textContent = 'Copy Code'), 2000);
      });
    }
  });
  