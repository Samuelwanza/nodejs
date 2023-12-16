const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');


const app = express();
const port = 3000; 



// Sample data
const programData = [
  {
    institution: 'AFRICA NAZARENE UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1078134,
    programName: 'BACHELOR OF LAWS (LLB)',
    programCost: 'KSH 269,250',
    cutoff2022: 34.07,
    cutoff2021: 38.854,
  },
  {
    institution: 'CATHOLIC UNIVERSITY OF EASTERN AFRICA',
    institutionType: 'PRIVATE',
    programCode: 1480134,
    programName: 'BACHELOR OF LAWS (LLB)',
    programCost: 'KSH 224,200',
    cutoff2022: 33.856,
    cutoff2021: 40.097,
  },
  {
    institution: 'CHUKA UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1105134,
    programName: 'BACHELOR OF LAWS (LL.B.)',
    programCost: 'KSH 183,600',
    cutoff2022: 39.904,
    cutoff2021: 39.032,
  },
  {
    institution: 'DAYSTAR UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1162134,
    programName: 'BACHELOR OF LAWS (LL.B.)',
    programCost: 'KSH 335,000',
    cutoff2022: 33.174,
    cutoff2021: 39.663,
  },
  {
    institution: 'EGERTON UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1057134,
    programName: 'BACHELOR OF LAWS (LLB)',
    programCost: 'KSH 214,700',
    cutoff2022: 39.86,
    cutoff2021: 38.824,
},
{
    institution: 'JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY',
    institutionType: 'PUBLIC',
    programCode: 1249134,
    programName: 'BACHELOR OF LAWS (LLB)',
    programCost: 'KSH 238,208',
    cutoff2022: 41.254,
    cutoff2021: 41.453,
},
{
    institution: 'KABARAK UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1061134,
    programName: 'BACHELOR OF LAWS (LL.B.)',
    programCost: 'KSH 256,150',
    cutoff2022: 35.922,
    cutoff2021: 40.271,
},
{
    institution: 'KENYATTA UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1111134,
    programName: 'BACHELOR OF LAWS (LLB)',
    programCost: 'KSH 183,600',
    cutoff2022: 41.278,
    cutoff2021: 42.036,
},
{
    institution: 'KISII UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1087134,
    programName: 'BACHELOR OF LAWS (LL.B.)',
    programCost: 'KSH 225,335',
    cutoff2022: 39.448,
    cutoff2021: 38.345,
},
{
    institution: 'MASENO UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1229134,
    programName: 'BACHELOR OF LAWS (LL.B.), WITH IT',
    programCost: 'KSH 183,600',
    cutoff2022: 39.439,
    cutoff2021: 38.345,
},
{
    institution: 'MOI UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1253134,
    programName: 'BACHELOR OF LAWS (LL.B.)',
    programCost: 'KSH 183,600',
    cutoff2022: 40.788,
    cutoff2021: 40.095,
},
{
    institution: 'MOUNT KENYA UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1279134,
    programName: 'BACHELOR OF LAWS (LLB)',
    programCost: 'KSH 170,000',
    cutoff2022: 39.748,
    cutoff2021: 41.5,
},
{
    institution: 'UNIVERSITY OF EMBU',
    institutionType: 'PUBLIC',
    programCode: 1093134,
    programName: 'BACHELOR OF LAWS (LL.B.)',
    programCost: 'KSH 183,600',
    cutoff2022: 38.819,
    cutoff2021: 38.042,
},
{
    institution: 'UNIVERSITY OF NAIROBI',
    institutionType: 'PUBLIC',
    programCode: 1263134,
    programName: 'BACHELOR OF LAWS (LLB)',
    programCost: 'KSH 221,850',
    cutoff2022: 41.758,
    cutoff2021: 42.348,
},
{
    institution: 'AFRICA NAZARENE UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1078133,
    programName: 'BACHELOR OF COMMERCE (B.COM)',
    programCost: 'KSH 227,500',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'CATHOLIC UNIVERSITY OF EASTERN AFRICA',
    institutionType: 'PRIVATE',
    programCode: 1480133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 192,000',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'CHUKA UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1105133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 23.266,
    cutoff2021: 24.769,
},
{
    institution: 'CO-OPERATIVE UNIVERSITY OF KENYA',
    institutionType: 'PUBLIC',
    programCode: 1080133,
    programName: 'BACHELOR OF COMMERCE (B.COM)',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 24.305,
},
{
    institution: 'DAYSTAR UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1162133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 223,900',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY',
    institutionType: 'PUBLIC',
    programCode: 1173133,
    programName: 'BACHELOR OF COMMERCE(B.COM)',
    programCost: 'KSH 172,800',
    cutoff2022: 21.444,
    cutoff2021: 27.234,
},
{
    institution: 'EGERTON UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1057133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 209,700',
    cutoff2022: 26.655,
    cutoff2021: 26.592,
},
{
    institution: 'GRETSA UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1088133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 132,000',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY',
    institutionType: 'PUBLIC',
    programCode: 1249133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 30.346,
    cutoff2021: 33.822,
},
{
    institution: 'KABARAK UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1061133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 163,035',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'KAIMOSI FRIENDS UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1470133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'KCA UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1103133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 141,665',
    cutoff2022: 21.444,
    cutoff2021: 25.523,
},
{
    institution: 'KENYATTA UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1111133,
    programName: 'BACHELOR OF COMMERCE (B.COM)',
    programCost: 'KSH 183,600',
    cutoff2022: 30.779,
    cutoff2021: 33.49,
},
{
    institution: 'KENYATTA UNIVERSITY - MAMA NGINA UNIVERSITY COLLEGE',
    institutionType: 'PUBLIC',
    programCode: 1580133,
    programName: 'BACHELOR OF COMMERCE (B.COM)',
    programCost: 'KSH 180,000',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'KIBABII UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1108133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'KIRINYAGA UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1079133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'KISII UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1087133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 206,635',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'KOITALEEL SAMOEI UNIVERSITY COLLEGE',
    institutionType: 'PUBLIC',
    programCode: 3890133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'LAIKIPIA UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1176133,
    programName: 'BACHELOR OF COMMERCE (B.COM)',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'LUKENYA UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1495133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 86,200',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'MAASAI MARA UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1165133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 204,000',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'MACHAKOS UNIVERSITY',
    institutionType: 'PUBLIC',
    programCode: 1170133,
    programName: 'BACHELOR OF COMMERCE (B.COM)',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'MANAGEMENT UNIVERSITY OF AFRICA',
    institutionType: 'PRIVATE',
    programCode: 1066133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 78,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'MASINDE MULIRO UNIVERSITY OF SCIENCE & TECHNOLOGY',
    institutionType: 'PUBLIC',
    programCode: 1082133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 24.453,
},
{
    institution: 'MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY',
    institutionType: 'PUBLIC',
    programCode: 1240133,
    programName: 'BACHELOR OF COMMERCE (B.COM)',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'MOUNT KENYA UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1279133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 105,000',
    cutoff2022: 21.444,
    cutoff2021: 26.072,
},
{
    institution: 'MULTIMEDIA UNIVERSITY OF KENYA',
    institutionType: 'PUBLIC',
    programCode: 1164133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'MURANGA UNIVERSITY OF TECHNOLOGY',
    institutionType: 'PUBLIC',
    programCode: 1246133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 183,600',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
{
    institution: 'PAN AFRICA CHRISTIAN UNIVERSITY',
    institutionType: 'PRIVATE',
    programCode: 1068133,
    programName: 'BACHELOR OF COMMERCE',
    programCost: 'KSH 214,220',
    cutoff2022: 21.444,
    cutoff2021: 22.544,
},
];

// Serve static files from the root directory (where app.js is located)
app.use(express.static(__dirname));

// Set the 'views' directory for EJS
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/predict', async (req, res) => {

        const clusterWeight = parseFloat(req.body.cluster_weight);
        // Check if the cluster weight is greater than the cutoff points
        const qualifiedCourses = programData
            .filter((program) => clusterWeight >= program.cutoff2022)
            .map((program) => program.programName);

        // Render the results page with qualified courses and program data using EJS
        res.render('results', { qualifiedCourses, programData });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
