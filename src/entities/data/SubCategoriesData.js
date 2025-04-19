// ctegories of food
const subCategoriesData = [
  // TH
  { id: "5c67575c-ac42-43c5-afb3-9fcac77317f3", categoryId: "TH", nameEn: "TBD", name: "ตามสั่ง" },
  { id: "f1e3b635-18c7-4e90-b0d7-2bca4adc1549", categoryId: "TH", nameEn: "TBD", name: "อีสาน" },
  { id: "2e9359cf-5b05-4fc2-a239-ea0d3c0adda1", categoryId: "TH", nameEn: "TBD", name: "กับข้าว" },
  { id: "d7507a6f-ca35-43a6-bf7d-64b5941a686c", categoryId: "TH", nameEn: "TBD", name: "ก่วยเตี๋ยว" },
  { id: "7761f1ed-5110-451b-891a-b33fe8f21709", categoryId: "TH", nameEn: "TBD", name: "หมูปิ้ง" },
  { id: "76c21cfb-7e27-4689-807e-0d9acfc0248d", categoryId: "TH", nameEn: "TBD", name: "ไก่ทอด" },
  { id: "a9684685-2aab-40ce-bce1-c666db7d2df7", categoryId: "TH", nameEn: "TBD", name: "ข้าวหน้าเนื้อ" },
  { id: "1413d181-575e-43d6-a278-f0e4f3643876", categoryId: "TH", nameEn: "TBD", name: "ไก่ย่าง" },
  { id: "57e95b1a-ec4c-4511-b367-f5bab5e5351a", categoryId: "TH", nameEn: "TBD", name: "เมี่ยง" },
  { id: "d5683d37-1a8c-42d9-b05e-50a234326265", categoryId: "TH", nameEn: "TBD", name: "ข้าวต้ม" },
  { id: "f6b9a5d2-9154-4946-a472-8c0fd546b28c", categoryId: "TH", nameEn: "TBD", name: "ข้าวมันไก่" },
  { id: "fcd9833f-7843-4f77-a550-2dc19235285d", categoryId: "TH", nameEn: "TBD", name: "ข้าวหมูแดง" },
  { id: "51e6c692-45df-46f5-82b8-d10270631871", categoryId: "TH", nameEn: "TBD", name: "ข้าวขาหมู" },
  { id: "f034d25f-8f03-4c9b-a125-c4627f569d88", categoryId: "TH", nameEn: "TBD", name: "ข้าวหน้าเป็ด" },
  { id: "483972eb-c2b6-421c-b668-aff1d1113914", categoryId: "TH", nameEn: "TBD", name: "ผัดไท/หอยทอด" },
  { id: "6d0f05c1-6ff8-4ec0-a14a-a5b4330e6999", categoryId: "TH", nameEn: "TBD", name: "ราดหน้า" },
  { id: "7d503978-cd3e-4067-b1e0-e14ca494471c", categoryId: "TH", nameEn: "TBD", name: "จิ้มจุ่ม" },
  { id: "e3e9e606-cc52-4b9b-8544-b3cfed1ab5a7", categoryId: "TH", nameEn: "TBD", name: "หมูกระทะ" },
  { id: "82353f11-47a3-444e-87f3-92bb21a5ad78", categoryId: "TH", nameEn: "TBD", name: "สุกี้" },
  { id: "495545ef-d251-45de-9c41-c615e70adef9", categoryId: "TH", nameEn: "TBD", name: "ต้มเลืือดหมู" },

  // KR
  { id: "f9a26491-9c36-49a6-9c21-4bca6bbe2740", categoryId: "KR", nameEn: "TBD", name: "ไก่ทอด" },
  { id: "b10d7a2e-0a58-4feb-b122-c05cca4c6064", categoryId: "KR", nameEn: "TBD", name: "คิมบับ" },
  { id: "2d3b0595-db84-4ca7-9262-d3b047430dd2", categoryId: "KR", nameEn: "TBD", name: "ข้าวผัดกิมจิ" },
  { id: "fb2afb55-7aa4-4e2b-8c38-894bfec16ce2", categoryId: "KR", nameEn: "TBD", name: "ปิ้งย่างเกาหลี" },

  // US
  { id: "49ee83a7-2a86-4c98-90d1-cc8250860805", categoryId: "US", nameEn: "TBD", name: "ไก่ทอด US" },
  { id: "ad7e1f79-6b4d-41c3-a595-7a249ecbeb42", categoryId: "US", nameEn: "TBD", name: "เบอร์เกอร์" },
  { id: "5340380e-8740-4435-b05d-824765a97dcb", categoryId: "US", nameEn: "TBD", name: "สเต็ก" },
  { id: "441bc337-91e3-413f-929c-d9d13a84d11d", categoryId: "US", nameEn: "TBD", name: "BBQ" },

  // MX
  { id: "0aab0718-4bbc-475d-9e93-a9f95661d0d7", categoryId: "MX", nameEn: "TBD", name: "Taco" },

  // JP
  { id: "e7693648-f016-4dcf-b865-70946dec2491", categoryId: "JP", nameEn: "Don", name: "Don" },
  { id: "0835e9f2-896d-47c3-8e43-03077a16601e", categoryId: "JP", nameEn: "TBD", name: "ซูชิ" },
  { id: "64891ecb-db59-4add-bb31-3273da4a3cc1", categoryId: "JP", nameEn: "TBD", name: "ชาบู" },
  { id: "a3151c35-3455-43c9-9b26-2456edfb2d13", categoryId: "JP", nameEn: "TBD", name: "ทงคัสสึ" },
  { id: "7d064546-db90-4295-a6cd-66d9895d76dd", categoryId: "JP", nameEn: "TBD", name: "แกงกระหรี่" },
  { id: "37b8df34-d79e-4d52-97fa-3ff555ea4c97", categoryId: "JP", nameEn: "TBD", name: "ข้าวผัดญี่ปุ่น" },
  { id: "529576ba-f90e-4bda-bad8-803d231efbe3", categoryId: "JP", nameEn: "TBD", name: "อาหารเซ็ต" },

  // IN
  { id: "911002d0-1d9c-47c2-b96d-838b34bb5a4c", categoryId: "IN", nameEn: "TBD", name: "อาหารอินเดีย" },

  // CN
  { id: "4c8a1085-b675-409d-bd4f-db1e20f6c89a", categoryId: "CN", nameEn: "TBD", name: "อาหารจีน" },
  { id: "b9035cf9-df67-4451-a0cd-2fdda8c70a0e", categoryId: "CN", nameEn: "TBD", name: "ติ่มซำ" },
  { id: "b6268a33-80dc-4b47-abd2-f448bffd0164", categoryId: "CN", nameEn: "TBD", name: "ผัดหมี่" },
  { id: "03aa603b-1d89-45e6-8f6c-8354ed60efcd", categoryId: "CN", nameEn: "TBD", name: "บักกุ๊ดเต๋" },

  // VN
  { id: "57d54fe9-0c5f-4557-aab9-da15edb9ad44", categoryId: "VN", nameEn: "TBD", name: "อาหารเวียดนาม" },

  // BR
  { id: "57d54fe9-0c5f-4557-aab9-da15edb9ad44", categoryId: "BR", nameEn: "TBD", name: "อาหารบราซิล" },

  // IT
  { id: "e82202d9-4dd6-4ea2-bd8f-03125212342e", categoryId: "IT", nameEn: "TBD", name: "Pizza" },
  { id: "bcc9412c-9dd8-47e4-9628-62879947d481", categoryId: "IT", nameEn: "Pasta", name: "Pasta" },
]

export default subCategoriesData