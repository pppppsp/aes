const encryptAES = (txt, code) => {
    return CryptoJS.AES.encrypt(txt, code).toString();
};

const decryptAES = (txt, decode) => {
    const bytes = CryptoJS.AES.decrypt(txt, decode); 
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};

$('#butForm').click((e)=>{ // событие для кнопки
    e.preventDefault(); // Убираем перезагрузку
    const messageUser = $('#id_message').val(); // Берём сообщение юзера
    const passphrase = $('#id_cry').val(); // Берём ключ
    $('#id_message').val(encryptAES(messageUser, passphrase)); // отправка в функцию
});

$('#butForm2').click((e)=>{ // событие для кнопки
    e.preventDefault(); // Убираем перезагрузку
    const messageUser = $('#id_message').val(); // Берём сообщение юзера
    const passphrase = $('#id_cry').val(); // Берём ключ
    $('#id_message').val(decryptAES(messageUser, passphrase)); // отправка в функцию
});





  

// $('#myResults')

