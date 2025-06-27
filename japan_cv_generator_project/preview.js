const data = {
  name: "田中 太郎",
  email: "tanaka@example.com",
  phone: "080-1234-5678",
  details: "2015年 東京大学卒業\n2016年 株式会社ABC入社"
};
fetch("jp-template.html")
  .then(r => r.text())
  .then(template => {
    const html = template.replace(/__NAME__/g, data.name)
                         .replace(/__EMAIL__/g, data.email)
                         .replace(/__PHONE__/g, data.phone)
                         .replace(/__DETAILS__/g, data.details);
    document.getElementById('cvPreview').innerHTML = html;
  });