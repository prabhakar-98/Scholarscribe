import React from 'react';
import PolicyPage from './policypage';

export const TermsOfUse: React.FC = () => {
  const title = "Terms of Use";
  const content = (
    <div>
      <h2>For Users</h2>
      <p>Recipients must be genuine and accurate when giving out information about themselves.
         Users are expected to make sure that they do not disclose their unique id and password 
         to anyone. We should be informed immediately if your id and password are lost or under 
         someone’s unauthorized control. In the event wrong information input into the system which
          in any way has affected the user/customer, we are not liable for it. The users cannot view or even break into areas that they have no rights to be in as per the website . They shall not in any way contaminate, modify, or delete content.</p>
      
      <h2>Our Agreement to you as our Customer</h2>
      <p>
      We function as representatives of professionals and vend authentic content to our clientele. Upon placing an order, we commit to delivering the desired quality of work. Our pledge includes assigning suitably qualified experts to fulfill your requests, employing reasonable judgment in expert allocation, and ensuring timely completion of assignments. This embodies our Completion Policy.
      Once an expert is assigned and payment is received, the order becomes binding, with no provision for refunds. However, we entertain requests for amendments post-allocation, provided they align with the original order and are deemed necessary. In case of conflicting additional information, we may offer a new quote or reallocate the order, with revised delivery timelines.
      We retain the right to cancel orders in case of undue complications, guaranteeing a full refund. Dissatisfied customers have recourse, but direct communication with our experts is prohibited. The agreement takes effect upon expert and customer finalization, continuing until job completion unless terminated by either party
        </p>      
      <h2>Outstanding Balance</h2>
      <p>
      If you as a customer pay a deposit and you agree to pay the balance at least 24 hours prior to the time when the order is due; and thereafter do not pay in accordance to the stated term, we have a right to hold on or delay the delivery of the work order.
        </p>      
      <h2>Unauthorized Use</h2>
      <p>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>
      
      <h2>Right And Detailed Information</h2>
       <p>As a customer, it is your responsibility to furnish all requisite details, information,
         and guidance in a timely manner. Any delay in providing necessary information may result in
          a delay in the delivery of the completed work. In such instances, our policy of timely
           completion will not apply, and we will not be liable for any resulting losses. 
           If our experts require clarification or specific details regarding the work order, we 
           will reach out to you using the email address or phone number provided. 
           Your response or instructions will be considered as originating from you.
      </p>      
      <h2>Privacy Policy</h2>
      <p>As part of our commitment to protecting your privacy, we ensure that any information provided by you during our interactions remains confidential and is not shared with any third party without your consent.
Additionally, we pledge not to disclose any personal information provided by you, unless required by law or lawful authority.</p>
   <h2>Unsatisfied Customers: Amendments To Completed Orders</h2>
   <p>Should you find yourself dissatisfied with our service and believe that your instructions were not followed, you may request revisions to your order. These revisions will be carried out by our experts free of charge within a 7-day window from the initial delivery of your order. However, any amendments requested beyond this timeframe will be subject to additional charges, and a new delivery deadline will be provided.
In the event of any disputes between you and our experts, our quality control team will review the matter and provide a final decision.</p>
   <h2>Refunds</h2>
   <p>Please note that all purchases of our online assignment help services are considered final. We do not offer refunds, returns, or exchanges. By completing a purchase, you agree not to dispute the transaction with your bank. If you encounter any issues or dissatisfaction with your purchase, we urge you to reach out to our customer service team for assistance. Requests for exceptions to this policy must be made in writing and are subject to our discretion. This policy remains in effect regardless of any portion being found unenforceable, and it is governed by the laws of the jurisdiction.</p>
    <h2>Terms Of Payment</h2>
    <p>If payment is not made at the time of ordering, we will contact you via email to arrange payment. If partial payment is accepted, the balance must be settled before the scheduled delivery date. Typically, full payment is required in advance, and we reserve the right to decline work if we are uncertain about securing an expert or delivering satisfactory results. In the event that full payment is made but no suitable expert is available, a refund will be issued. Our decision in such matters is final, and we will provide detailed explanations for our actions.</p>
    <h2>General</h2>
    <p>Your use of the resources on our site is at your own risk.

We do not operate on public holidays, and any service provided on such days is at our discretion.

Before placing an order, it is your responsibility to review your university's guidelines and regulations.

Our services are strictly for academic support and do not constitute professional advice.

We are not liable for any interruptions or delays in accessing the site, and we reserve the right to suspend access for maintenance or upgrades.

We are not responsible for any delays or interruptions in modifying, suspending, or discontinuing the site.

Any disputes arising from the use of our website will be subject to the laws of India or other applicable regulatory authority.</p>
    
    <h2>Termination</h2>
    <p>We reserve the right to terminate any part or all of the service agreement, your account, or your access to the site at our discretion. Notice of termination may be provided on the site or through communication to your address (email or otherwise). You will remain liable for any breaches of these terms incurred prior to termination.</p>
    </div>
  );

  return <PolicyPage title={title} content={content} />;
};

export default TermsOfUse;
