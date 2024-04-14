async function fetchData() {
    try {
        const res = await fetch('https://freetestapi.com/api/v1/mobiles');
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const json = await res.json();
        displayMobileDataInNewWindow(json);
    } catch (error) {
        console.error(error);
    }
}

function displayMobileDataInNewWindow(mobiles) {
    const detailsWindow = window.open('', 'Mobile Details', 'width=600,height=400');
    detailsWindow.document.write('<h2>Mobile Data</h2>');
    detailsWindow.document.write('<ul>');

    mobiles.forEach(mobile => {
        detailsWindow.document.write('<li>');
        detailsWindow.document.write('<ul>');
        for (const key in mobile) {
            if (mobile.hasOwnProperty(key)) {
                detailsWindow.document.write(`<li><strong>${key}:</strong> ${mobile[key]}</li>`);
            }
        }
        detailsWindow.document.write('</ul>');
        detailsWindow.document.write('</li>');
    });

    detailsWindow.document.write('</ul>');
    detailsWindow.document.close();
}