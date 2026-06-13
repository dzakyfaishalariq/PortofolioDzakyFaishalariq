import { ref } from "vue";

interface DataCertification {
    id: number;
    name: string;
    organization: string;
    tanggal: string;
    credential: string;
    urlcredential: string;
}

export const all_certificat = ref<DataCertification[]>([
    {
        id: 1,
        name: "AI Agents and Agentic AI with Python & Generative AI",
        organization: "Vanderbilt University",
        tanggal: "April 2026",
        credential: "849BSGR4IJS3",
        urlcredential: "https://www.coursera.org/account/accomplishments/records/849BSGR4IJS3"
    },
    {
        id: 2,
        name: "Build, Analyze, and Refactor LLM Workflows",
        organization: "Coursera",
        tanggal: "March 2026",
        credential: "96KFI0JXH73X",
        urlcredential: "https://www.coursera.org/account/accomplishments/records/96KFI0JXH73X"
    },
    {
        id: 3,
        name: "Sertifikat Kelas Belajar VueJS 3",
        organization: "CODEPOLITAN",
        tanggal: "September 2025",
        credential: "L7H8PAT",
        urlcredential: "https://codepolitan.com/c/L7H8PAT"
    },
    {
        id: 4,
        name: "Build Real World AI Applications with Gemini and Imagen",
        organization: "Google",
        tanggal: "February 2025",
        credential: "14077251",
        urlcredential: "https://www.cloudskillsboost.google/public_profiles/f7268f55-401d-48bf-8ca7-1dd99a6e564c/badges/14077251?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
        id: 5,
        name: "Introduction to Large Language Models",
        organization: "Google",
        tanggal: "February 2025",
        credential: "14063138",
        urlcredential: "https://www.cloudskillsboost.google/public_profiles/f7268f55-401d-48bf-8ca7-1dd99a6e564c/badges/14063138?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
        id: 6,
        name: "Boost Productivity with Gemini in BigQuery",
        organization: "Google",
        tanggal: "February 2025",
        credential: "14054465",
        urlcredential: "https://www.cloudskillsboost.google/public_profiles/f7268f55-401d-48bf-8ca7-1dd99a6e564c/badges/14054465?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
        id: 7,
        name: "Prompt Design in Vertex AI",
        organization: "Google",
        tanggal: "February 2025",
        credential: "14042747",
        urlcredential: "https://www.cloudskillsboost.google/public_profiles/f7268f55-401d-48bf-8ca7-1dd99a6e564c/badges/14042747?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
        id: 8,
        name: "Dasar-dasar Keamanan Siber",
        organization: "United Latino Students Association",
        tanggal: "January 2025",
        credential: "YAK2E1Y6FY9R",
        urlcredential: "https://www.coursera.org/account/accomplishments/verify/YAK2E1Y6FY9R"
    },
    {
        id: 9,
        name: "Spesialisasi TensorFlow: Advanced Techniques",
        organization: "DeepLearning.AI",
        tanggal: "August 2024",
        credential: "1I0GMU64XZ4H",
        urlcredential: "https://www.coursera.org/account/accomplishments/specialization/1I0GMU64XZ4H"
    },
    {
        id: 10,
        name: "Introduction to Machine Learning in Production",
        organization: "DeepLearning.AI",
        tanggal: "March 2024",
        credential: "223GDVKZ6QCR",
        urlcredential: "https://www.coursera.org/account/accomplishments/records/223GDVKZ6QCR"
    },
    {
        id: 11,
        name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
        organization: "Dicoding Indonesia",
        tanggal: "March 2024 - March 2027",
        credential: "NVP770JDGPR0",
        urlcredential: "https://www.dicoding.com/certificates/NVP770JDGPR0"
    },
    {
        id: 12,
        name: "Advanced Computer Vision with TensorFlow",
        organization: "DeepLearning.AI",
        tanggal: "March 2024",
        credential: "NYGMVAVQUUKS",
        urlcredential: "https://www.coursera.org/account/accomplishments/records/NYGMVAVQUUKS"
    },
    {
        id: 13,
        name: "Custom and Distributed Training with TensorFlow",
        organization: "DeepLearning.AI",
        tanggal: "January 2024",
        credential: "SK8QK3B7X5A5",
        urlcredential: "https://www.coursera.org/account/accomplishments/records/SK8QK3B7X5A5"
    },
    {
        id: 14,
        name: "Intro to Deep Learning",
        organization: "Kaggle",
        tanggal: "December 2023",
        credential: "-",
        urlcredential: "https://www.kaggle.com/learn/certification/mipamm/intro-to-deep-learning"
    },
    {
        id: 15,
        name: "Intro to Machine Learning",
        organization: "Kaggle",
        tanggal: "December 2023",
        credential: "-",
        urlcredential: "https://www.kaggle.com/learn/certification/mipamm/intro-to-machine-learning"
    },
    {
        id: 16,
        name: "Intermediate Machine Learning",
        organization: "Kaggle",
        tanggal: "December 2023",
        credential: "-",
        urlcredential: "https://www.kaggle.com/learn/certification/mipamm/intermediate-machine-learning"
    },
    {
        id: 17,
        name: "Sertifikat Kelas Belajar ReactJS",
        organization: "CODEPOLITAN",
        tanggal: "December 2023 - December 2026",
        credential: "V0X2GYD",
        urlcredential: "https://codepolitan.com/c/V0X2GYD"
    },
    {
        id: 18,
        name: "AWS Cloud Technical Essentials",
        organization: "Amazon Web Services",
        tanggal: "December 2023",
        credential: "A5GGYXTPKVAD",
        urlcredential: "https://www.coursera.org/account/accomplishments/records/A5GGYXTPKVAD"
    },
    {
        id: 19,
        name: "DeepLearning.AI TensorFlow Developer Specialization",
        organization: "Coursera",
        tanggal: "November 2023",
        credential: "VLYEFUZGLUZQ",
        urlcredential: "https://www.coursera.org/account/accomplishments/specialization/certificate/VLYEFUZGLUZQ"
    },
    {
        id: 20,
        name: "AWS Solutions Architect – Associate (SAA-C03) Certification Preparation for AWS",
        organization: "Cloud Academy",
        tanggal: "November 2023",
        credential: "-",
        urlcredential: "https://certificates.cloudacademy.com/8b14499bf93d7108f14acec60be6a5a366904f2a.pdf"
    },
    {
        id: 21,
        name: "Natural Language Processing in TensorFlow",
        organization: "Coursera",
        tanggal: "October 2023",
        credential: "KKL7VWLHGV2U",
        urlcredential: "https://www.coursera.org/account/accomplishments/certificate/KKL7VWLHGV2U"
    },
    {
        id: 22,
        name: "AWS Cloud Practitioner (CLF-C02) Certification Preparation",
        organization: "Cloud Academy",
        tanggal: "October 2023",
        credential: "-",
        urlcredential: "https://certificates.cloudacademy.com/0729a6c70f39b1bd9a573de261cf3d69826076aa.pdf"
    },
    {
        id: 23,
        name: "Convolutional Neural Networks in TensorFlow",
        organization: "Coursera",
        tanggal: "October 2023",
        credential: "MYH8G9EH53LA",
        urlcredential: "https://www.coursera.org/account/accomplishments/certificate/MYH8G9EH53LA"
    },
    {
        id: 24,
        name: "AWS Educate Web Builder",
        organization: "Amazon Web Services (AWS)",
        tanggal: "October 2023",
        credential: "-",
        urlcredential: "https://www.credly.com/badges/78d5ec55-4bab-4325-9048-84db03d4de7d/linked_in_profile"
    },
    {
        id: 25,
        name: "AWS Educate Getting Started with Cloud Ops",
        organization: "Amazon Web Services (AWS)",
        tanggal: "October 2023",
        credential: "-",
        urlcredential: "https://www.credly.com/badges/37bf5871-9746-400b-a13c-926129c07cfc/linked_in_profile"
    },
    {
        id: 26,
        name: "AWS Educate Getting Started with Security",
        organization: "Amazon Web Services (AWS)",
        tanggal: "October 2023",
        credential: "-",
        urlcredential: "https://www.credly.com/badges/a83cd4fe-a900-417d-affb-e89ea6f95544/linked_in_profile"
    },
    {
        id: 27,
        name: "AWS Educate Getting Started with Serverless",
        organization: "Amazon Web Services (AWS)",
        tanggal: "October 2023",
        credential: "-",
        urlcredential: "https://www.credly.com/badges/94881750-3e00-4c30-a54b-edaa6fd7d0f9/linked_in_profile"
    },
    {
        id: 28,
        name: "AWS Educate Getting Started with Databases",
        organization: "Amazon Web Services (AWS)",
        tanggal: "October 2023",
        credential: "-",
        urlcredential: "https://www.credly.com/badges/c78adf06-1d3b-4444-b976-113d71c54337/linked_in_profile"
    }
]);
