export const memberOrganizations = [
  {
    id: "balaju-hotel-business",
    name: "Balaju Hotel Business Association",
    shortName: "Balaju HBA",
    committee: [
      { role: "President", name: "Tika Bahadur Rayamajhi", phone: "9851007831" },
      { role: "Vice President", name: "Govinda Marasini", phone: "9851146651" },
      { role: "Vice President", name: "Kok Bahadur Rasayali", phone: "9851082945" },
      { role: "General Secretary", name: "Lekhnath Kharal", phone: "9851018353" },
      { role: "Secretary", name: "Shailendra Bikram Thapa", phone: "9851195211" },
      { role: "Treasurer", name: "Ganga Bahadur Khati", phone: "9851236769" },
      { role: "Member", name: "Indra Parajuli", phone: "9851124996" },
      { role: "Member", name: "Surya Bahadur Khati", phone: "9851195765" },
      { role: "Member", name: "Nabaraj Gautam", phone: "9849810909" },
      { role: "Member", name: "Hari Ghimire", phone: "9841698851" },
      { role: "Member", name: "Tilak Sripali", phone: "9851049951" },
      { role: "Member", name: "Bimal Ji Si", phone: "9841078496" },
      { role: "Member", name: "Mani Kumar Rai", phone: "9808254893" },
      { role: "Member", name: "Hari Kishor Karki", phone: "9843660506" },
      { role: "Member", name: "Bishwaraj Syangbo", phone: "9848013237" },
      { role: "Member", name: "Goma Gaire", phone: "9813159782" },
      { role: "Member", name: "Goma Thapa", phone: "9851202737" },
    ],
  },
  {
    id: "kalanki-hotel-guesthouse",
    name: "Kalanki Hotel and Guest house Association",
    shortName: "Kalanki HGA",
    committee: [
      { role: "President", name: "Rajesh Kumar Sharma", phone: "9851234567" },
      { role: "Vice President", name: "Priya Patel", phone: "9851345678" },
      { role: "General Secretary", name: "Anil Khatri", phone: "9851456789" },
    ],
  },
  {
    id: "kathmandu-hotel-business",
    name: "Kathmandu Hotel Business Association",
    shortName: "Kathmandu HBA",
    committee: [
      { role: "President", name: "Suresh Baral", phone: "9851567890" },
      { role: "Vice President", name: "Maya Desai", phone: "9851678901" },
      { role: "General Secretary", name: "Devi Nath Sharma", phone: "9851789012" },
    ],
  },
  {
    id: "nepal-guesthouse-business",
    name: "Nepal Guest House Business Association",
    shortName: "Nepal GHB",
    committee: [
      { role: "President", name: "Vikram Singh Rana", phone: "9851890123" },
      { role: "Vice President", name: "Deepika Gurung", phone: "9851901234" },
      { role: "General Secretary", name: "Ramesh Adhikari", phone: "9852012345" },
    ],
  },
  {
    id: "sundhara-hotel-business",
    name: "Sundhara Hotel Business Association",
    shortName: "Sundhara HBA",
    committee: [
      { role: "President", name: "Arjun Verma", phone: "9852123456" },
      { role: "Vice President", name: "Neha Singh", phone: "9852234567" },
      { role: "General Secretary", name: "Rajiv Thakur", phone: "9852345678" },
    ],
  },
  {
    id: "united-hotel-guesthouse",
    name: "United Hotel and Guest House",
    shortName: "United HGH",
    committee: [
      { role: "President", name: "Mohan Lama", phone: "9852456789" },
      { role: "Vice President", name: "Anita Sherpa", phone: "9852567890" },
      { role: "General Secretary", name: "Niraj Tamang", phone: "9852678901" },
    ],
  },
  {
    id: "nepali-hotel-business",
    name: "Nepali Hotel Business Association",
    shortName: "Nepali HBA",
    committee: [
      { role: "President", name: "Kiran Malla", phone: "9852789012" },
      { role: "Vice President", name: "Sunita Yadav", phone: "9852890123" },
      { role: "General Secretary", name: "Prakash Pokhrel", phone: "9852901234" },
    ],
  },
]

export function getMemberOrganization(id: string) {
  return memberOrganizations.find((org) => org.id === id)
}
