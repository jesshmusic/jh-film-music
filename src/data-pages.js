import DemoReel1Cover from './assets/images/DemoReel01Cover.jpg';
import DemoReel2Cover from './assets/images/DemoReel02Cover.jpg';
import jessPortrait from './assets/images/JHendricksPortrait.jpg';
import homeBanner from './assets/images/HomePageBanner.jpg';

const Pages = {
  homePage: {
    title: 'Jess Hendricks',
    subtitle: 'Composer for film, games, and media',
    featureImage: {
      imageUrl: homeBanner,
      imageAlt: 'Jess Hendricks',
    },
    videos: [
      {
        title: 'Demo Reel #1',
        subtitle: 'Main Demo Reel',
        sourceURL: 'https://jh-demo-reels.s3.amazonaws.com/JHDemoReel1.mp4',
        posterImage: DemoReel1Cover
      },
      {
        title: 'Demo Reel #2',
        subtitle: 'Martian Manhunter: music for animation',
        sourceURL: 'https://jh-demo-reels.s3.amazonaws.com/Exodus.mp4',
        posterImage: DemoReel2Cover
      }
    ],
    description: {

    }
  },
  aboutPage: {
    title: 'About Jess Hendricks',
    subtitle: 'biography',
    featureImage: {
      imageUrl: jessPortrait,
      imageAlt: 'Jess Hendricks',
    },
    videos: [
      {
        title: 'Demo Reel #1',
        subtitle: 'Main Demo Reel',
        sourceURL: 'https://jh-demo-reels.s3.amazonaws.com/JHDemoReel1.mp4',
        posterImage: DemoReel1Cover
      },
      {
        title: 'Demo Reel #2',
        subtitle: 'Martian Manhunter: music for animation',
        sourceURL: 'https://jh-demo-reels.s3.amazonaws.com/Exodus.mp4',
        posterImage: DemoReel2Cover
      }
    ]
  }
}

export default Pages;
