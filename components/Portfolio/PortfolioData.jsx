import PortfolioImg from '@/public/images/portfolio-img.jpg';
import edunet from '@/public/images/porto/edunet.jpeg';
import edunet1 from '@/public/images/porto/edunet1.png';
import edunet2 from '@/public/images/porto/edunet2.jpeg';
import haris from '@/public/images/porto/haris.png';
import haris1 from '@/public/images/porto/haris1.png';
import haris2 from '@/public/images/porto/haris2.png';
import serenify from '@/public/images/porto/serenify.png';
import serenify1 from '@/public/images/porto/serenify1.png';
import serenify2 from '@/public/images/porto/serenify2.png';
import MainImage from '@/public/images/blog-img-wide.jpg';

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "Recent",
        title2Span: "Works",
        description: "My recent works collection, designed to meet client needs with innovation and professionalism."
    },    
    projects: [
        {
            title: 'EduNet',
            slug: 'first',
            description: 'Edunet is an innovative learning platform specifically designed to deepen understanding of data communication and networks. By integrating learning modules, AR Scan feature for visual exploration of network objects, and quizzes for assessment, Edunet provides an engaging and interactive learning experience. Join the Edunet community to explore the vast and fascinating world of network technology!',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: 'SMAN1 Cibinong',
            projectLink: {
                title: 'EduNet',
                url: 'https://drive.google.com/file/d/11fTaX7vQbp2Ch7QP6AFAtTfaARsZDta6/view?pli=1'
            },
            duration: '3 Month',
            content: 'SMAN 1 Cibinong is in need of a highly innovative and effective application for creating animated video learning modules on Computer Networks and the Internet for 11th-grade students. This application should include integrated quizzes as additional learning media. The design should encompass engaging multimedia content that is easy to understand, integrated interactive quizzes, an intuitive user interface, and compatibility with both mobile and desktop devices. The goal is to enhance student engagement in the learning process and help them achieve a deeper understanding of the topics.',
            mainImage: edunet,
            mainImageWide: edunet1,
            images: [
                { image: edunet },
                { image: edunet2 },
            ],
            categories: [
                { name: 'UI/UX' },
                { name: 'Mobile' },
            ],
        },
        {
            title: 'Harris Hotel',
            slug: 'second',
            description: 'Harris Hotel offers a vibrant and comfortable stay experience, blending modern amenities with a touch of local charm. Located in Palagraf, it provides guests with convenient access to the city attractions and business districts. With spacious rooms, a range of dining options, and dedicated service, Harris Hotel ensures a memorable stay for both leisure and business travelers alike.',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: 'Harris Hotel',
            projectLink: {
                title: 'GitHub Harris Hotel',
                url: 'https://www.flatheme.nethttps://github.com/egagaluh28/harris-hotel'
            },
            duration: '1 Month',
            // content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            mainImage: haris,
            mainImageWide: haris,
            images: [
                { image: haris1 },
                { image: haris2 },
            ],
            categories: [
                { name: 'UI/UX' },
                { name: 'Website' }
            ],
        },
        {
            title: 'Serenify',
            slug: 'third',
            description: 'Serenify is a mobile application that helps mental health sufferers, especially Anxiety. By providing AI features that help sufferers tell stories freely without pressure',
            services: [
                { name: 'List item' },
                { name: 'List item' },
            ],
            client: '-',
            projectLink: {
                title: 'Notion Link',
                url: 'https://feather-backbone-f72.notion.site/Serinify-Mental-Health-App-for-Anxiety-ddae88456afa4cdf8e7665b7613c6176'
            },
            duration: '1 week',
            content: 'In recent years, awareness of the importance of mental health has increased globally, including in Indonesia. The 2022 Indonesian National Adolescent Mental Health Survey, as many as 15.5 million adolescents or around 34.9 percent of them face mental health issues, and around 2.45 million adolescents or 5.5 percent experience mental disorders. Anxiety disorders are the first mental health disease in the world with a rate of 3.8%, beating depression in second place with a rate of 3.4%.',
            mainImage: serenify,
            mainImageWide: serenify,
            images: [
                { image: serenify1 },
                { image: serenify2 },
            ],
            categories: [
                { name: 'UI/UX Design' },
                { name: 'Design Grafis' },
                // { name: 'Category' }
            ],
        },
    ]
};