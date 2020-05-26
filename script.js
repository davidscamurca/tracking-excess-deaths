let data = [
    {
        city: "Fortaleza",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=792436143&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=974461622&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Recife",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1304622001&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=371414893&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Maceió",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=999294909&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=670978769&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    },{
        city: "Porto Alegre",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=830203151&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=997528468&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Porto Velho",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=2016048194&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=2131673806&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Rio Branco",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1669362611&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=849789512&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, /*{
        city: "Rio de Janeiro",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1123555561&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=760713715&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, */{
        city: "Salvador",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1025394679&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=691389739&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Palmas",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=546159595&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1308734061&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Vitória",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1613891668&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1295068533&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Boa Vista",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1274072063&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1047959036&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Curitiba",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=2110181806&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1532564514&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Belo Horizonte",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1484642246&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=787334633&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Goânia",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=266797842&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=2038689215&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "João Pessoa",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1006999021&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1168495359&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Florianópolis",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=804424251&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1702446701&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Natal",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1312110907&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=777586034&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Aracaju",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=969380&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1337169810&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Campo Grande",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=24123805&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1070730435&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Brasília",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=346417459&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=728907054&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Macapá",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=390043443&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=721729908&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }, {
        city: "Cuiabá",
        src1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1479580604&amp;format=interactive",
        src2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZFztIR4SJeSNrZwCzNP6lOkbIdwDIA5L1e_Qwn1dlUVD_iqXSgW3ff-qnZDKTtImbf1tnmS7ChnuU/pubchart?oid=1320340526&amp;format=interactive",
        excess: "Ainda não calculado para o mês de Maio"
    }
];

let select = document.querySelector('#cityChosen');

let loadOptions = function () {
    let options = data.map(option => `<option value="${option.city}">${option.city}</option>`).join('\n');
    select.innerHTML = options;
};

let selectCity = function () {
    let selectedValue = document.getElementById('cityChosen').value;
    document.getElementById('dinamic-city-title').innerHTML = data.find(city => city.city === selectedValue).city;
    document.getElementById('excess-label').innerHTML = `Excesso: ${data.find(city => city.city === selectedValue).excess}`;
    document.getElementById('primary-frame').src = data.find(city => city.city === selectedValue).src1;
    document.getElementById('secondary-frame').src = data.find(city => city.city === selectedValue).src2;

};

loadOptions();
