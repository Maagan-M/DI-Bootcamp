class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  const video1 = new Video('JavaScript Tutorial', 'John Doe', 300);
  video1.watch(); // John Doe watched all 300 seconds of JavaScript Tutorial!
  
  const video2 = new Video('Python Tutorial', 'Jane Smith', 450);
  video2.watch(); // Jane Smith watched all 450 seconds of Python Tutorial!
  
  const videoData = [
    { title: 'HTML Basics', uploader: 'Alice', time: 600 },
    { title: 'CSS Grid', uploader: 'Bob', time: 720 },
    { title: 'React Hooks', uploader: 'Charlie', time: 540 },
    { title: 'Node.js Streams', uploader: 'Dave', time: 480 },
    { title: 'GraphQL Introduction', uploader: 'Eve', time: 360 }
  ];
  
  const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

  videos.forEach(video => video.watch());
  