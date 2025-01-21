import { Program } from "@/types/program"

export const initialPrograms: Program[] = [
  {
    id: "1",
    tourCode: "ADWINTER2024",
    title: "เรียนจีน เที่ยวหิมะเมืองหนาว",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "WINTER",
    university: "HIT",
    defaultPrice: 55900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "27 วัน",
    coverImage: "/images/tours/ADWINTER2024.png",
    rooms: [
      {
        name: "Single room",
        price: 55900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [
      {
        week: "Week 1",
        title: "Welcome to Harbin & Orientation",
        description: "เริ่มต้นการเดินทางสู่เมืองฮาร์บิน พร้อมทำความรู้จักกับมหาวิทยาลัยและเริ่มต้นการเรียนรู้ภาษาจีน",
        activities: [
          "เดินทางถึงเมืองฮาร์บิน และเช็คอินที่พัก",
          "ปฐมนิเทศและแนะนำการใช้ชีวิตในมหาวิทยาลัย",
          "เริ่มเรียนภาษาจีนในช่วงเช้า (8:00-12:00)",
          "กิจกรรมแลกเปลี่ยนวัฒนธรรมในช่วงบ่าย",
          "เยี่ยมชมสถาบันเทคโนโลยีฮาร์บิน (HIT)",
          "ทำความรู้จักกับเพื่อนร่วมโครงการและอาจารย์",
        ],
      },
      {
        week: "Week 2",
        title: "City Exploration & Cultural Experience",
        description: "สัปดาห์แห่งการสำรวจเมืองฮาร์บินและสัมผัสประสบการณ์ทางวัฒนธรรม พร้อมเฉลิมฉลองเทศกาลปีใหม่",
        activities: [
          "เรียนภาษาจีนต่อเนื่องในช่วงเช้า",
          "เที่ยวชมถนนจงหยาง (中央大街) ถนนคนเดินที่มีชื่อเสียง",
          "เยี่ยมชมร้านชาดั้งเดิมและเรียนรู้วัฒนธรรมการชงชา",
          "ชมความอลังการของ Harbin Ice Snow World",
          "ฟังการแสดงดนตรีที่ Music Concert Hall (音乐长廊)",
          "ร่วมเฉลิมฉลองเทศกาลปีใหม่ในบรรยากาศแบบจีน",
        ],
      },
      {
        week: "Week 3",
        title: "Intensive Learning & Cultural Integration",
        description: "เข้าสู่ช่วงการเรียนรู้เข้มข้น เน้นการฝึกใช้ภาษาจีนในชีวิตประจำวันและการแลกเปลี่ยนวัฒนธรรม",
        activities: [
          "เรียนภาษาจีนเข้มข้น เน้นการสื่อสารในชีวิตประจำวัน",
          "กิจกรรมแลกเปลี่ยนวัฒนธรรมกับนักศึกษาจีน",
          "เยี่ยมชมพิพิธภัณฑ์และสถานที่สำคัญทางประวัติศาสตร์",
          "ฝึกใช้ภาษาจีนในสถานการณ์จริง",
          "ทัศนศึกษานอกสถานที่",
          "กิจกรรมกลุ่มสัมพันธ์และแลกเปลี่ยนประสบการณ์",
        ],
      },
      {
        week: "Week 4",
        title: "Program Wrap-up & Evaluation",
        description: "สัปดาห์สุดท้ายของโครงการ เน้นการประเมินผลการเรียนรู้และเตรียมตัวเดินทางกลับ",
        activities: [
          "สรุปบทเรียนภาษาจีน",
          "เยี่ยมชมมหาวิทยาลัยวิศวกรรมฮาร์บิน",
          "สอบวัดระดับความรู้ภาษาจีน (Post-Test)",
          "กิจกรรมอำลาและแลกเปลี่ยนของที่ระลึก",
          "เตรียมเอกสารและสัมภาระสำหรับการเดินทางกลับ",
          "พิธีมอบประกาศนียบัตร",
        ],
      },
      {
        week: "Final Day",
        title: "Departure Day",
        description: "เดินทางกลับประเทศไทยโดยสวัสดิภาพ พร้อมความทรงจำและประสบการณ์ที่ดี",
        activities: [
          "เช็คเอาท์จากที่พัก",
          "เตรียมเอกสารการเดินทาง",
          "เดินทางไปสนามบิน",
          "เดินทางกลับประเทศไทยโดยสวัสดิภาพ",
        ],
      },
    ],
  },
  {
    id: "2",
    tourCode: "ADOCTOBERCAMP",
    title: "เรียนจีน เที่ยวจีน",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 46900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "14 วัน",
    coverImage: "/images/tours/ADOCTOBERCAMP.png",
    rooms: [
      {
        name: "Single room",
        price: 46900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [
      {
        week: "Week 1",
        title: "Arrival and First Week in Harbin",
        description: "เริ่มต้นการเดินทางสู่เมืองฮาร์บิน พร้อมเริ่มเรียนภาษาจีนและทำความรู้จักกับเมือง",
        activities: [
          "วันที่ 12: เดินทางถึงสุวรรณภูมิและเดินทางไปฮาร์บิน",
          "วันที่ 13: ทานบุฟเฟ่ต์เที่ยงและเยี่ยมชมมหาวิทยาลัย",
          "วันที่ 14-18: เรียนภาษาจีนช่วงเช้า",
          "เยี่ยมชมสถานที่สำคัญ เช่น แม่น้ำซงหัว",
          "เยี่ยมชมอุทยานแห่งชาติเกาะพระอาทิตย์",
          "ทำกิจกรรมเชื่อมความสัมพันธ์",
        ],
      },
      {
        week: "Week 2",
        title: "Cultural Experience and Study",
        description: "สัปดาห์แห่งการเรียนรู้ภาษาและวัฒนธรรม พร้อมทัศนศึกษาสถานที่สำคัญ",
        activities: [
          "วันที่ 19: ทัศนศึกษาหมู่บ้านรัสเซีย",
          "วันที่ 20: วันอิสระพักผ่อนตามอัธยาศัย",
          "วันที่ 21-25: เรียนภาษาจีนภาคเช้า",
          "เยี่ยมชมวัดจีโล่",
          "เยี่ยมชมโรงละครซาปิน",
          "กิจกรรมเยี่ยมชมความอัจฉริยะ",
        ],
      },
      {
        week: "Final Weekend",
        title: "Wrap-up and Departure",
        description: "ช่วงสุดท้ายของการเดินทางและเตรียมตัวกลับประเทศไทย",
        activities: ["วันที่ 26: เที่ยวสวนสัตว์", "วันที่ 27: เดินทางกลับประเทศไทยโดยสวัสดิภาพ"],
      },
    ],
  },
  {
    id: "3",
    tourCode: "ADSTUDYMAR2W",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 39900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "14 วัน",
    coverImage: "/images/tours/ADSTUDYMAR2W.png",
    rooms: [{ name: "Single room", price: 39900 }],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "4",
    tourCode: "ADSTUDYMAR3W",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 43900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "3 สัปดาห์",
    coverImage: "/images/tours/ADSTUDYMAR3W.png",
    rooms: [
      {
        name: "Single room",
        price: 43900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "5",
    tourCode: "ADSTUDYMAR1M",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 49900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "30 วัน",
    coverImage: "/images/tours/ADSTUDYMAR1M.png",
    rooms: [
      {
        name: "Single room",
        price: 49900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "6",
    tourCode: "ADSTUDYMAR2M",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 59900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "60 วัน",
    coverImage: "/images/tours/ADSTUDYMAR2M.png",
    rooms: [
      {
        name: "Single room",
        price: 59900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "7",
    tourCode: "ADSTUDYMAR3M",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 79900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "90 วัน",
    coverImage: "/images/tours/ADSTUDYMAR3M.png",
    rooms: [
      {
        name: "Single room",
        price: 79900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "8",
    tourCode: "ADJULYCAMPSTUDY_HIT",
    title: "เรียนจีน เที่ยวจีน",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 53900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "27 วัน",
    coverImage: "/images/tours/ADJULYCAMPSTUDY_HIT.png",
    rooms: [
      {
        name: "Single room",
        price: 53900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [
      {
        week: "Week 1 (June 30 - July 6)",
        title: "Arrival and Orientation Week",
        description: "เริ่มต้นการเดินทางและปรับตัวกับการเรียนภาษาจีน พร้อมทำความรู้จักกับมหาวิทยาลัย HIT",
        activities: [
          "วันที่ 30 มิ.ย.: เดินทางถึงสนามบินสุวรรณภูมิและออกเดินทางไปประเทศจีน",
          "วันที่ 1 ก.ค.: สอบวัดระดับพื้นฐาน, เยี่ยมชมมหาวิทยาลัย HIT, ต้อนรับอาหารเย็น",
          "วันที่ 2-5 ก.ค.: เรียนภาษาจีนช่วงเช้า (08:30-12:00)",
          "เยี่ยมชมพิพิธภัณฑ์อวกาศของมหาวิทยาลัย HIT",
          "วันที่ 6 ก.ค.: เยี่ยมชม 8 นั้งกระเช้าลอยฟ้าอาร์บิน",
        ],
      },
      {
        week: "Week 2 (July 7-13)",
        title: "Cultural Immersion Week",
        description: "สัปดาห์แห่งการเรียนรู้วัฒนธรรมจีนและการท่องเที่ยว",
        activities: [
          "วันที่ 7 ก.ค.: ทัศนศึกษา - ชมทุ่นหนเผิน จงหวาง และแม่น้ำซงหัว",
          "วันที่ 8-12 ก.ค.: เรียนภาษาจีนช่วงเช้า",
          "เรียนรู้วัฒนธรรมจีนแบบ Chinese Baroque Style",
          "ฝึกการสื่อสารภาษาจีน",
          "เยี่ยมชมเขตพระอาทิตย์",
          "วันที่ 13 ก.ค.: เยี่ยมชม 4 เมืองเก่าชาร์บิน",
        ],
      },
      {
        week: "Week 3 (July 14-20)",
        title: "Advanced Learning and City Exploration",
        description: "เรียนรู้เชิงลึกทั้งภาษาและวัฒนธรรม พร้อมสำรวจสถานที่สำคัญของเมือง",
        activities: [
          "วันที่ 14 ก.ค.: เยี่ยมชมหมู่บ้านรัสเซีย",
          "วันที่ 15-19 ก.ค.: เรียนภาษาจีนช่วงเช้า",
          "เรียนวัฒนธรรมจีนดั้งเดิม",
          "เยี่ยมชมสถานที่ฝึกและพัฒนาด้านวิศวกรรม",
          "ฝึกการสื่อสารภาษาจีน",
          "เยี่ยมชมโรงนิทรรศการเมืองชาร์บิน",
          "วันที่ 20 ก.ค.: ทัศนศึกษา 5 สวนสัตว์ชาร์บิน",
        ],
      },
      {
        week: "Week 4 (July 21-27)",
        title: "Program Conclusion and Departure",
        description: "สัปดาห์สุดท้ายของโครงการ เน้นการประเมินผลและสรุปการเรียนรู้",
        activities: [
          "วันที่ 21 ก.ค.: เยี่ยมชม 7 โรงละครชาร์บิน",
          "วันที่ 22-24 ก.ค.: เรียนภาษาจีนช่วงเช้าวันสุดท้าย",
          "สรุปการเรียนแบบแลกเตอร์",
          "วันที่ 25 ก.ค.: สอบสรุปผลการเรียน",
          "วันที่ 26 ก.ค.: เข้าร่วมพิธีจบการศึกษา",
          "วันที่ 27 ก.ค.: เดินทางกลับประเทศไทยโดยสวัสดิภาพ",
        ],
      },
    ],
  },
  {
    id: "9",
    tourCode: "ADWINTER2025",
    title: "เรียนจีน เที่ยวจีน",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 55900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "27 วัน",
    coverImage: "/images/tours/ADWINTER2025.png",
    rooms: [
      {
        name: "Single room",
        price: 55900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [
      {
        week: "Week 1 (Dec 21-27)",
        title: "Arrival and Orientation",
        description: "เริ่มต้นการเดินทางสู่ฮาร์บิน พร้อมปฐมนิเทศและเริ่มเรียนภาษาจีน",
        activities: [
          "21 ธ.ค.: เดินทางถึงสนามบินสุวรรณภูมิและเดินทางไปฮาร์บิน",
          "22 ธ.ค.: เดินทางถึงฮาร์บิน ทำความรู้จักเมือง",
          "23 ธ.ค.: สมัครเรียนมหาวิทยาลัย, ปฐมนิเทศ, ต้อนรับอาหารเย็น",
          "24 ธ.ค.: สอบวัดระดับ, กิจกรรมต้อนรับเพื่อนใหม่",
          "25-27 ธ.ค.: เรียนภาษาจีน, กิจกรรมวัฒนธรรม, เยี่ยมชม HIT",
        ],
      },
      {
        week: "Week 2 (Dec 28 - Jan 3)",
        title: "City Exploration and Cultural Activities",
        description: "สัปดาห์แห่งการสำรวจเมืองและวัฒนธรรม พร้อมฉลองปีใหม่",
        activities: [
          "28 ธ.ค.: เยี่ยมชมถนน Zhongyang (中央大街), ร้านชา, ศูนย์การค้า",
          "29 ธ.ค.: พักผ่อนตามอัธยาศัย",
          "30 ธ.ค.: เรียนภาษาจีน, เยี่ยมชมสวนดอกไม้และสวนพฤกษศาสตร์",
          "31 ธ.ค.: เรียนภาษาจีน",
          "1 ม.ค.: ฉลองวันปีใหม่",
          "2-3 ม.ค.: เยี่ยมชม Harbin Ice Snow World, สวนดนตรี",
        ],
      },
      {
        week: "Week 3 (Jan 4-10)",
        title: "Deep Cultural Immersion",
        description: "เรียนรู้วัฒนธรรมและชีวิตความเป็นอยู่ของชาวฮาร์บิน",
        activities: [
          "4 ม.ค.: เยี่ยมชมหมู่บ้านรัสเซีย",
          "5 ม.ค.: วันอิสระพักผ่อน",
          "6-10 ม.ค.: เรียนภาษาจีน, กิจกรรมวัฒนธรรม",
          "เยี่ยมชมเมืองเก่าชาร์บิน",
          "กิจกรรมฝึกภาษาจีน",
        ],
      },
      {
        week: "Week 4 (Jan 11-18)",
        title: "Program Conclusion",
        description: "สัปดาห์สุดท้ายของโครงการและการประเมินผล",
        activities: [
          "11-12 ม.ค.: ทัศนศึกษา, เยี่ยมชมโรงละคร",
          "13-15 ม.ค.: เรียนภาษาจีน, เยี่ยมชมพิพิธภัณฑ์",
          "16 ม.ค.: สอบวัดระดับ Post-Test",
          "17 ม.ค.: พิธีจบการศึกษา",
          "18 ม.ค.: เดินทางกลับประเทศไทยโดยสวัสดิภาพ",
        ],
      },
    ],
  },
  {
    id: "10",
    tourCode: "ADSTUDYMAR2W2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HNU",
    defaultPrice: 39900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "14 วัน",
    coverImage: "/images/tours/ADSTUDYMAR2W2025.png",
    rooms: [
      { name: "Single room", price: 39900 },
      { name: "Couple room", price: 41900 },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "11",
    tourCode: "ADSTUDYMAR3W2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HNU",
    defaultPrice: 41900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "21 วัน",
    coverImage: "/images/tours/ADSTUDYMAR3W2025.png",
    rooms: [
      { name: "Single room", price: 41900 },
      { name: "Couple room", price: 45900 },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "12",
    tourCode: "ADSTUDYMAR1M2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HNU",
    defaultPrice: 47900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "30 วัน",
    coverImage: "/images/tours/ADSTUDYMAR1M2025.png",
    rooms: [
      { name: "Single room", price: 47900 },
      { name: "Couple room", price: 50900 },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "13",
    tourCode: "ADSTUDYMAR2M2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HNU",
    defaultPrice: 62900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "2 เดือน",
    coverImage: "/images/tours/ADSTUDYMAR2M2025.png",
    rooms: [
      { name: "Single room", price: 62900 },
      { name: "Couple room", price: 65900 },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "14",
    tourCode: "ADSTUDYMAR3M2025",
    title: "เรียนจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HNU",
    defaultPrice: 79900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "3 เดือน",
    coverImage: "/images/tours/ADSTUDYMAR3M2025.png",
    rooms: [
      { name: "Single room", price: 79900 },
      { name: "Couple room", price: 89900 },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "15",
    tourCode: "ADSTUDY1YNORMAL",
    title: "เรียนจีนระยะยาว",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "LONG",
    season: "SPRING",
    university: "HNU",
    defaultPrice: 149900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "1 ปี",
    coverImage: "/images/tours/ADSTUDY1YNORMAL.png",
    rooms: [
      { name: "Single room", price: 149900 },
      { name: "Couple room", price: 179900 },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "16",
    tourCode: "ADSTUDY1YHIT",
    title: "เรียนจีนระยะยาว",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "LONG",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 179900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "1 ปี",
    coverImage: "/images/tours/ADSTUDY1YHIT.png",
    rooms: [
      {
        name: "Single room",
        price: 179900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "17",
    tourCode: "ADSTUDY1TNORMAL",
    title: "เรียนภาษาจีน",
    description:
      "Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "LONG",
    season: "SPRING",
    university: "HNU",
    defaultPrice: 89900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "1 เทอม",
    coverImage: "/images/tours/ADSTUDY1TNORMAL.png",
    rooms: [
      { name: "Single room", price: 89900 },
      { name: "Couple room", price: 109900 },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "18",
    tourCode: "ADLONGTERMSTUDY1T_HIT",
    title: "เรียนภาษาจีน",
    description:
      "เรียนกับมหาวิทยาลัยชื่อดัง Harbin Institute of Technology !! Top 10 ของประเทศจีน พร้อมกิจกรรมเรียนวัฒนธรรมจีน มอบทั้งความรู้และประสบการณ์ประเทศจีน 🇨🇳",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "LONG",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 99900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "1 ปี",
    coverImage: "/images/tours/ADLONGTERMSTUDY1T_HIT.png",
    rooms: [
      {
        name: "Single room",
        price: 99900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
  {
    id: "19",
    tourCode: "ADSTUDYHARBIN_SUMMER21DAYS",
    title: "เรียนจีน เที่ยวจีน พร้อมศึกษาวัฒนธรรมจีน",
    description:
      "เรียนกับมหาวิทยาลัยชื่อดัง Harbin Institute of Technology !! Top 10 ของประเทศจีน พร้อมทัศนศึกษา 10 สถานที่ดังเมืองฮาร์บิน พร้อมกิจกรรมเรียนวัฒนธรรมจีน มอบทั้งความรู้และประสบการณ์ประเทศจีน 🇨🇳",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "LONG",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 55900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "21 วัน",
    coverImage: "/images/tours/ADSTUDYHARBIN_SUMMER21DAYS.png",
    rooms: [
      {
        name: "Single room",
        price: 55900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [
      {
        week: "Week 1 (June 30 - July 6)",
        title: "Orientation and Language Studies Begin",
        description: "เริ่มต้นการปรับตัวและการเรียนภาษาจีน พร้อมทำความรู้จักกับมหาวิทยาลัย HIT",
        activities: [
          "พบกับที่สนามบินสุวรรณภูมิและออกเดินทางไปประเทศจีน",
          "สอบวัดระดับพื้นฐานและเยี่ยมชมมหาวิทยาลัย HIT",
          "เข้าคลาสเรียนภาษาจีนช่วงเช้า (08:30-12:00)",
          "ปรับพื้นฐานทำกิจกรรมกับเพื่อน",
          "เรียนรู้วิถีชีวิตและพิธีกรรมของมหาวิทยาลัย",
          "8 นักกรีฑาเข้าค่ายพิเศษจีน",
        ],
      },
      {
        week: "Week 2 (July 7 - July 13)",
        title: "Culture and Language Immersion",
        description: "สัปดาห์แห่งการเรียนรู้ภาษาและวัฒนธรรมจีน พร้อมทัศนศึกษาสถานที่สำคัญ",
        activities: [
          "เรียนภาษาจีนช่วงเช้า (08:30-12:00) ทุกวันจันทร์-ศุกร์",
          "ทัศนศึกษา: 2 คนเดินจิมจงทอง, 3 แม่น้ำซงฮวา",
          "เรียนรู้วัฒนธรรมจีนแบบ Chinese Baroque Style",
          "ฝึกการสื่อสารภาษาจีน",
          "เยี่ยมชมพระราชวัง",
          "4 เรื่องเล่าชาวจีน",
        ],
      },
      {
        week: "Week 3 (July 14 - July 20)",
        title: "Advanced Studies and Cultural Activities",
        description: "เรียนรู้เชิงลึกเกี่ยวกับวัฒนธรรมและภาษาจีน พร้อมทัศนศึกษาสถานที่สำคัญ",
        activities: [
          "เรียนภาษาจีนช่วงเช้า (08:30-12:00) ทุกวันจันทร์-ศุกร์",
          "เยี่ยมชม 6 หมู่บ้านรัสเซีย",
          "เรียนรู้วัฒนธรรมดั้งเดิม",
          "เรียนการฝึกพูดภาษาจีน",
          "5 สวนสัตว์ศาสตร์จีน",
          "เยี่ยมชมสถานที่และพัฒนาด้านวิทยาการ",
        ],
      },
      {
        week: "Final Week (July 21 - July 27)",
        title: "Conclusion and Return Journey",
        description: "สรุปการเรียนรู้และเตรียมเดินทางกลับประเทศไทย",
        activities: [
          "เรียนภาษาจีนช่วงเช้าตามปกติ",
          "เยี่ยมชม 7 โรงละครศาสตร์จีน",
          "สรุปการเรียนแบบแลกเตอร์",
          "สอบสรุปผลการเรียน",
          "เข้ารับพิธีจบการศึกษา",
          "เดินทางกลับประเทศไทยโดยสวัสดิภาพ พร้อมความประทับใจ",
        ],
      },
    ],
  },
]

export const featuredPrograms = [
  {
    id: "1",
    tourCode: "ADSTUDYHARBIN_SUMMER21DAYS",
    title: "เรียนจีน เที่ยวจีน พร้อมศึกษาวัฒนธรรมจีน",
    description:
      "เรียนกับมหาวิทยาลัยชื่อดัง Harbin Institute of Technology !! Top 10 ของประเทศจีน พร้อมทัศนศึกษา 10 สถานที่ดังเมืองฮาร์บิน พร้อมกิจกรรมเรียนวัฒนธรรมจีน มอบทั้งความรู้และประสบการณ์ประเทศจีน 🇨🇳",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "LONG",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 55900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "21 วัน",
    coverImage: "/images/tours/ADSTUDYHARBIN_SUMMER21DAYS.png",
    rooms: [
      {
        name: "Single room",
        price: 55900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [
      {
        week: "Week 1 (June 30 - July 6)",
        title: "Orientation and Language Studies Begin",
        description: "เริ่มต้นการปรับตัวและการเรียนภาษาจีน พร้อมทำความรู้จักกับมหาวิทยาลัย HIT",
        activities: [
          "พบกับที่สนามบินสุวรรณภูมิและออกเดินทางไปประเทศจีน",
          "สอบวัดระดับพื้นฐานและเยี่ยมชมมหาวิทยาลัย HIT",
          "เข้าคลาสเรียนภาษาจีนช่วงเช้า (08:30-12:00)",
          "ปรับพื้นฐานทำกิจกรรมกับเพื่อน",
          "เรียนรู้วิถีชีวิตและพิธีกรรมของมหาวิทยาลัย",
          "8 นักกรีฑาเข้าค่ายพิเศษจีน",
        ],
      },
      {
        week: "Week 2 (July 7 - July 13)",
        title: "Culture and Language Immersion",
        description: "สัปดาห์แห่งการเรียนรู้ภาษาและวัฒนธรรมจีน พร้อมทัศนศึกษาสถานที่สำคัญ",
        activities: [
          "เรียนภาษาจีนช่วงเช้า (08:30-12:00) ทุกวันจันทร์-ศุกร์",
          "ทัศนศึกษา: 2 คนเดินจิมจงทอง, 3 แม่น้ำซงฮวา",
          "เรียนรู้วัฒนธรรมจีนแบบ Chinese Baroque Style",
          "ฝึกการสื่อสารภาษาจีน",
          "เยี่ยมชมพระราชวัง",
          "4 เรื่องเล่าชาวจีน",
        ],
      },
      {
        week: "Week 3 (July 14 - July 20)",
        title: "Advanced Studies and Cultural Activities",
        description: "เรียนรู้เชิงลึกเกี่ยวกับวัฒนธรรมและภาษาจีน พร้อมทัศนศึกษาสถานที่สำคัญ",
        activities: [
          "เรียนภาษาจีนช่วงเช้า (08:30-12:00) ทุกวันจันทร์-ศุกร์",
          "เยี่ยมชม 6 หมู่บ้านรัสเซีย",
          "เรียนรู้วัฒนธรรมดั้งเดิม",
          "เรียนการฝึกพูดภาษาจีน",
          "5 สวนสัตว์ศาสตร์จีน",
          "เยี่ยมชมสถานที่และพัฒนาด้านวิทยาการ",
        ],
      },
      {
        week: "Final Week (July 21 - July 27)",
        title: "Conclusion and Return Journey",
        description: "สรุปการเรียนรู้และเตรียมเดินทางกลับประเทศไทย",
        activities: [
          "เรียนภาษาจีนช่วงเช้าตามปกติ",
          "เยี่ยมชม 7 โรงละครศาสตร์จีน",
          "สรุปการเรียนแบบแลกเตอร์",
          "สอบสรุปผลการเรียน",
          "เข้ารับพิธีจบการศึกษา",
          "เดินทางกลับประเทศไทยโดยสวัสดิภาพ พร้อมความประทับใจ",
        ],
      },
    ],
  },
  {
    id: "2",
    tourCode: "ADOCTOBERCAMP",
    title: "เรียนจีน เที่ยวจีน",
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 46900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "14 วัน",
    coverImage: "/images/tours/ADOCTOBERCAMP.png",
    rooms: [
      {
        name: "Single room",
        price: 46900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [
      {
        week: "Week 1",
        title: "Arrival and First Week in Harbin",
        description: "เริ่มต้นการเดินทางสู่เมืองฮาร์บิน พร้อมเริ่มเรียนภาษาจีนและทำความรู้จักกับเมือง",
        activities: [
          "วันที่ 12: เดินทางถึงสุวรรณภูมิและเดินทางไปฮาร์บิน",
          "วันที่ 13: ทานบุฟเฟ่ต์เที่ยงและเยี่ยมชมมหาวิทยาลัย",
          "วันที่ 14-18: เรียนภาษาจีนช่วงเช้า",
          "เยี่ยมชมสถานที่สำคัญ เช่น แม่น้ำซงหัว",
          "เยี่ยมชมอุทยานแห่งชาติเกาะพระอาทิตย์",
          "ทำกิจกรรมเชื่อมความสัมพันธ์",
        ],
      },
      {
        week: "Week 2",
        title: "Cultural Experience and Study",
        description: "สัปดาห์แห่งการเรียนรู้ภาษาและวัฒนธรรม พร้อมทัศนศึกษาสถานที่สำคัญ",
        activities: [
          "วันที่ 19: ทัศนศึกษาหมู่บ้านรัสเซีย",
          "วันที่ 20: วันอิสระพักผ่อนตามอัธยาศัย",
          "วันที่ 21-25: เรียนภาษาจีนภาคเช้า",
          "เยี่ยมชมวัดจีโล่",
          "เยี่ยมชมโรงละครซาปิน",
          "กิจกรรมเยี่ยมชมความอัจฉริยะ",
        ],
      },
      {
        week: "Final Weekend",
        title: "Wrap-up and Departure",
        description: "ช่วงสุดท้ายของการเดินทางและเตรียมตัวกลับประเทศไทย",
        activities: ["วันที่ 26: เที่ยวสวนสัตว์", "วันที่ 27: เดินทางกลับประเทศไทยโดยสวัสดิภาพ"],
      },
    ],
  },
  {
    id: "3",
    tourCode: "ADSTUDYMAR2M",
    title: "เรียนจีน",
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    location: "Harbin, China ",
    type: "STUDY",
    duration: "SHORT",
    season: "SPRING",
    university: "HIT",
    defaultPrice: 59900,
    startDate: undefined,
    endDate: undefined,
    availableDate: ["MARCH", "SEPTEMBER"],
    period: "60 วัน",
    coverImage: "/images/tours/ADSTUDYMAR2M.png",
    rooms: [
      {
        name: "Single room",
        price: 59900,
      },
    ],
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    itinerary: [],
  },
]
