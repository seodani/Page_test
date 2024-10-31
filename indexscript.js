async function checkForEncryptedFile() {
      try {
        const response = await fetch('latestfile.encrypted');
        if (!response.ok) throw new Error("File not found");

        document.getElementById('status').innerText = "파일을 찾았습니다! 암호를 입력하세요.";
        document.getElementById('passwordInput').style.display = "inline";
        document.getElementById('decryptButton').style.display = "inline";
      } catch (error) {
        document.getElementById('status').innerText = "오류 발생: 디코딩할 파일을 찾을 수 없습니다.";
      }
    }

    async function decryptFile() {
      const password = document.getElementById('passwordInput').value;
      if (!password) {
        alert("알림: 비밀번호를 입력하세요.");
        return;
      }

      try {
        const response = await fetch('latestfile.encrypted');
        const encryptedText = await response.text();

        // Decrypt the file data using UTF-8 decoding
        const decryptedData = CryptoJS.AES.decrypt(encryptedText, password).toString(CryptoJS.enc.Utf8);

        if (!decryptedData) {
          alert("알림: 비밀번호가 틀렸습니다. 다시 시도하세요.");
          return;
        }

        // Convert decrypted data to Blob
        const byteCharacters = decryptedData;
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/jpeg' });

        const img = document.getElementById('outputImage');
        img.src = URL.createObjectURL(blob);
        img.style.display = "block";

        // Enable download link
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = img.src;
        downloadLink.download = "decrypted.mp4";
        downloadLink.style.display = "block";
        downloadLink.innerText = "이미지를 다운로드 합니다.";

        // Update status message
        document.getElementById('status').innerText = "Image decrypted successfully!";
        document.getElementById('passwordInput').style.display = "none";
        document.getElementById('decryptButton').style.display = "none";
      } catch (error) {
        console.error("예외사항 오류가 발생하였습니다:", error);
        alert("알림: 비밀번호가 틀렸습니다. 다시 시도하세요.");
      }
    }

    // Check for the encrypted file on load
    checkForEncryptedFile();
    // v2.1 seodani.
