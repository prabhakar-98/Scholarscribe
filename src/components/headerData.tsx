// Define the type for sectionData
interface SectionData {
    [key: string]: string[]; // Index signature
  }
  
  // Sample data for sectionData
  const sectionData: SectionData = {
    Services: [
    "<li>Assignment</li>",
    "<li>Academic Assignment Writing</li>",
    "<li>Marketing Assignments</li>",
    "<li>Management Assignments</li>",
    "<li>Finance/Accounting Assignments</li>",
    "<li>Economics Assignment Help</li>",
    "<li>Law Assignments</li>",
    "<li>Other Assignment Services</li>",
    ],
    Experts: [
    "<li>Meet Our Academic Experts, You can chat with Tutors anytime and discuss the problems.</li>"
    ],
    Reviews: [
    "<li>Scholarscribe.com has garnered nothing but praise from the clients. Any trustworthy review platform has positive review about our service and gives us motivation to improve.</li>", 
    ],
    About: [
    "<li>Scholarscribe.com helps you to stay at the top of the class with online assignment help. The reason we have been the go to place for urgent assignment help is our pool of finest assignment writing experts for all academic assignments. Our assignment helpers have great writing skills and run a comprehensive assignment check to provide you with custom online assignment help. </li>"
    ],
    Resources: [
    "<li>Learn how to do External Analysis of a company</li>",
    "<li>Learn how to prepare a Marketing Plan for a company</li>",
    "<li>Learn how to understand Financial Statement of a company</li>",
    ],
    Tools: [
    "<li>Free Plagrism Report</li>",
    "<li> Word Counts</li>",
    "<li>Check Grammar</li>",
     "<li>Reference Generator</li>",
    "<li>Reference Generator</li>",
     "<li>Play Konnekt Game</li>",
     "<li>Play On-off Game</li>"
    ],
  };
  
  export default sectionData;