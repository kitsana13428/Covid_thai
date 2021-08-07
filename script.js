const apiData = {
    url: "http://covid19.th-stat.com/json/covid19v2/getTodayCases.json"
}

const {url} = apiData
const apiUrl = `${url}`

//ดึงข้อมูล
fetch(apiUrl)
.then((data) => data.json())
.then((coviddata) => generate(coviddata))

const generate = (data) => {
    console.log(data);
    //ข้อมูลที่แสดง
    const dvHtml = `
    <span>เสียชีวิตเพิ่ม + ${data.NewDeaths}</span>
    `
    const covidshow = document.querySelector("#coviddata")
    covidshow.innerHTML = dvHtml; //แสดงข้อมุล
}