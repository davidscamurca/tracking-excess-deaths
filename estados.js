let data = [
    {
        city: "Pernambuco",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1572452277&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1001937550&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Maranhão",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1424941375&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1810756372&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Rio Grande do Sul",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=926617474&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=371345680&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Alagoas",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=375969448&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1448796836&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Pará",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1562269599&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=728646781&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Santa Catarina",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=801006225&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1256872845&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Ceará",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=885133464&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1481918993&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Rio Grande do Norte",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1144200260&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1035132850&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Espírito Santo",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=2039384358&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=152958031&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Distrito Federal",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=167834814&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=741644704&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Bahia",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=517991320&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=2134066617&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Goiás",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=746446281&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=953658092&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Rondônia",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1156543440&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1585551960&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Roraima",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1400419699&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=268490596&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Acre",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1884105700&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1603750398&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Paraíba",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1649367523&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1103280624&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Paraná",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=271776906&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=2059898289&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Sergipe",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1997024117&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=375657595&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Mato Grosso do Sul",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1972666071&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1608324830&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Rio de Janeiro",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1205653319&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1782344062&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Tocantins",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1877789194&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=225723289&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Piauí",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1187058428&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=603577082&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Minas Gerais",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1662954055&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=566744606&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Mato Grosso",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1829322653&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1319910654&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
    }, {
        city: "Amapá",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1157169200&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=2085972708&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio" 
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
