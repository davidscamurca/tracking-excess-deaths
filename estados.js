let data = [
    {
        city: "Pernambuco",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1572452277&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1001937550&amp;format=interactive",
        excess: 744 
    }, {
        city: "Maranhão",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1424941375&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1810756372&amp;format=interactive",
        excess: 162 
    }, {
        city: "Rio Grande do Sul",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=926617474&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=371345680&amp;format=interactive",
        excess: 1431 
    }
];

let select = document.querySelector('#estateChosen');

let loadOptions = function () {
    let options = data.map(option => `<option value="${option.city}">${option.city}</option>`).join('\n');
    select.innerHTML = options;
};

let selectCity = function () {
    let selectedValue = document.getElementById('estateChosen').value;
    document.getElementById('dinamic-estate-title').innerHTML = data.find(city => city.city === selectedValue).city;
    document.getElementById('excess-label').innerHTML = `Excesso: ${data.find(city => city.city === selectedValue).excess}`;
    document.getElementById('primary-frame').src = data.find(city => city.city === selectedValue).src1;
    document.getElementById('secondary-frame').src = data.find(city => city.city === selectedValue).src2;

};

loadOptions();