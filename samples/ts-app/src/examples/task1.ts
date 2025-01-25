type CustomResponseType = 'success' | 'error';

function handleResponse(res: CustomResponseType) {
    if (res === 'success') {
        console.log('Successfully sent');
    } else {
        console.log('Error');
    }
}

(() => {
    const myResponse: CustomResponseType = 'success';

    handleResponse(myResponse);
})();
