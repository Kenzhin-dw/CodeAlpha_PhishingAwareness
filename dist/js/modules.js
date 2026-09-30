window.TrainingData={
  modules:[
    {id:'fundamentals',title:'Phishing fundamentals'},{id:'types',title:'Phishing types'},{id:'email',title:'Email red flags'},
    {id:'spot',title:'Spot the phish'},{id:'website',title:'Fake websites'},{id:'urls',title:'URL detective'},
    {id:'social',title:'Social engineering'},{id:'scenarios',title:'Decision scenarios'},{id:'practices',title:'Best practices'},
    {id:'clicked',title:'If you already clicked'},{id:'patterns',title:'Real-world patterns'},{id:'quiz',title:'Final quiz'}
  ],
  types:[
    {name:'Email phishing',definition:'A broad deceptive email sent to many recipients.',scenario:'A fake account alert asks users to sign in.',signs:'Unexpected request, mismatched sender or destination, pressure.',response:'Open the official app or site independently; report the message.'},
    {name:'Spear phishing',definition:'A targeted message tailored to a person or team.',scenario:'A project-specific request appears to come from a colleague.',signs:'Plausible context paired with an unusual action or channel.',response:'Verify with the person through a known second channel.'},
    {name:'Smishing',definition:'Phishing delivered by SMS or messaging apps.',scenario:'A delivery text requests a small redelivery fee.',signs:'Unexpected link, shortened URL, urgency, payment request.',response:'Use the courier’s official app or tracked order page.'},
    {name:'Vishing',definition:'Voice calls or messages used to manipulate a target.',scenario:'A caller claims to be bank fraud support and asks for an MFA code.',signs:'Caller-ID trust, secrecy, time pressure, code request.',response:'End the call and dial the official number yourself.'},
    {name:'Clone phishing',definition:'A legitimate-looking message is copied and altered.',scenario:'A familiar invoice email is resent with a replaced attachment.',signs:'Unexpected resend, changed file or link, subtle sender difference.',response:'Compare with the original and confirm with the sender.'},
    {name:'Business email compromise',definition:'Impersonation of an executive, supplier, or mailbox owner for fraud.',scenario:'A “director” requests a confidential urgent payment.',signs:'Payment change, secrecy, bypassed process, unusual tone.',response:'Apply the approved payment-verification process.'},
    {name:'Social media phishing',definition:'Deception through direct messages, comments, or fake profiles.',scenario:'A friend appears to send a contest link.',signs:'New profile, unusual writing, unexpected login or payment.',response:'Contact the person through a known channel.'},
    {name:'QR phishing / quishing',definition:'A QR code hides a destination until it is scanned.',scenario:'A poster promises an account benefit after sign-in.',signs:'Untrusted placement, concealed URL, unexpected authentication.',response:'Avoid the QR code; navigate to the official service yourself.'}
  ],
  principles:[
    {name:'Urgency',example:'“Act in ten minutes.”',why:'Time pressure reduces careful checking.',response:'Pause; deadlines can be verified.'},
    {name:'Authority',example:'“The director requires this.”',why:'People tend to comply with perceived leaders.',response:'Follow normal approval steps.'},
    {name:'Fear',example:'“Your account will be closed.”',why:'Threats trigger fast protective action.',response:'Check through the official service.'},
    {name:'Curiosity',example:'“See who viewed your profile.”',why:'Information gaps invite clicks.',response:'Treat unsolicited hooks cautiously.'},
    {name:'Scarcity',example:'“Only two rewards remain.”',why:'Limited availability discourages deliberation.',response:'Do not let scarcity override verification.'},
    {name:'Trust',example:'A message appears to come from a friend.',why:'Familiar identity lowers suspicion.',response:'Confirm unexpected requests separately.'},
    {name:'Reciprocity',example:'A free favor precedes a request.',why:'People feel pressure to return favors.',response:'Assess the request independently.'},
    {name:'Impersonation',example:'A fake support agent requests a code.',why:'Borrowed identity creates false legitimacy.',response:'Contact support using known details.'},
    {name:'Pretexting',example:'A detailed story justifies a data request.',why:'Context makes an unusual request feel routine.',response:'Check both identity and need-to-know.'},
    {name:'Baiting',example:'A “salary list” attachment is offered.',why:'A tempting reward encourages unsafe action.',response:'Do not open unexpected files.'}
  ],
  patterns:[
    {name:'Credential phishing',pattern:'A sign-in page is used to capture account secrets.',example:'Fictional example: a CloudVault “session expired” message links to a lookalike host.'},
    {name:'Business email compromise',pattern:'A leader or supplier is impersonated to redirect a payment or sensitive process.',example:'Fictional example: the “finance director” requests a secret same-day transfer.'},
    {name:'Delivery impersonation',pattern:'A parcel problem or small fee creates a timely reason to click.',example:'Fictional example: ParcelWay requests a redelivery fee through an unexpected text.'},
    {name:'Cloud-share impersonation',pattern:'A document invitation leads to an unrelated sign-in page.',example:'Fictional example: a shared file notice asks for credentials on another domain.'},
    {name:'MFA social engineering',pattern:'An attacker asks for a one-time code or pushes repeated approval prompts.',example:'Fictional example: “support” asks the user to read back an authentication code.'},
    {name:'QR phishing',pattern:'A QR code conceals the destination and moves inspection to a phone.',example:'Fictional example: a workplace poster asks users to scan and revalidate benefits.'}
  ]
};
