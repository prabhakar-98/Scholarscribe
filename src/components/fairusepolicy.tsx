import React from 'react';
import PolicyPage from './policypage';

const FairUsePolicy = () => {
  const title = "Fair Use Policy";

  const content = (
    <div className="policy-page-content">
      <h2>Combating The Odds Of Plagiarism</h2>
      <p>It may appear to be tempting to submit the tailor-made essays, assignments and research papers as your own; this isn’t how you’re supposed to avail our services. The model academic papers we provide, is meant to be used as a rough draft for further research. You are expected to include your understanding and unique slants in the paper, in order to avoid plagiarism.</p>

      <p>We respect the academic norms observed by various universities across the globe. However, disregarding the conventions of plagiarism by using the original model paper as it is, will be of no help in the long run. It will prevent you from accumulating the knowledge you need to implement during examinations.</p>

      <h2>How Should I Use The Sample Papers?</h2>
      <p>Our model assignment papers are written in order to provide students with an example of how a particular academic question can be managed. However, that doesn’t mean the particular question will only be asked in a similar format. The chances are that you may be asked to come up with a different perspective based on a similar topic. However, the model academic papers will serve the purpose of helping you to form ideas regarding a strong starting point. You can eventually draft your own paper based on an extensive research, you may wish to conduct further. Here’s a step-by-step guide on how to use our sample papers.</p>

      <ul>
        <li>Read the entire sample answer in order to form an idea of how the question has been answered.</li>
        <li>Re-read each of the paragraphs and sections in the paper and note down all important points.</li>
        <li>Try to implement original ideas and arguments from the notes you’ve jotted down.</li>
        <li>Find out the sources the researcher has included in the model answer and review the same.</li>
        <li>Utilise the sources in order to conduct further research requisite for the same type of academic work.</li>
        <li>Read through the information you have collected and make further notes on the key elements you would consider including in your work.</li>
        <li>Make sure that the final piece of work is 100% plagiarism-free and has been written using your own expertise.</li>
      </ul>

      <p>Even though it will be a bit tedious for you to review the model paper and draw references from it, you’ll learn the entire topic thoroughly that would help you in your examinations ahead.</p>

      <h2>Can I Submit The Sample Answer To My Academic Institute?</h2>
      <p>No! Using the work of a researcher is an act of plagiarism. You cannot pass off someone else’s work as your own. Even if you try making minor alterations in the work, it will still be considered plagiarised. You are supposed to submit 100% original work to your college and university. The tailor-made research work provided by us will be absolutely beneficial if you consider using it according to our Fair Use Policy. This will help you to upgrade your academic scores by learning how to master the art of composing exemplary academic papers, during every semester.</p>

      <p>In case, you have further queries regarding the Fair Use Policy or Terms and Conditions, feel free to contact our Customer Relationship Managers via +61-3-4000-0033.</p>
    </div>
  );

  return (
    <PolicyPage title={title} content={content} />
  );
}

export default FairUsePolicy;
