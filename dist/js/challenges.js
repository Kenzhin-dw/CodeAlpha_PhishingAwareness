window.ChallengeData={
  spot:[
    {from:'Security Desk <alerts@northstar-it.example>',subject:'Mailbox closes today',body:'Your storage is full. Sign in within 20 minutes to prevent permanent deletion.',link:'https://northstar.example.mail-restore.example',answer:'phishing',why:'The unrelated registrable domain, destructive deadline, and unexpected sign-in request combine into strong evidence.'},
    {from:'Library Services <notices@library.example.edu>',subject:'Book due in three days',body:'Your borrowed book is due Friday. You can view the title by opening the library site from your saved bookmark.',link:null,answer:'legitimate',why:'The message has no link or sensitive request and recommends an independent route. Still verify context if you did not borrow a book.'},
    {from:'Ari <ari@design.example.org>',subject:'Re: Tuesday workshop',body:'I moved our workshop outline into the team drive. Open it from the drive app when convenient.',link:null,answer:'legitimate',why:'The context may be expected and the message does not push a supplied link. A display alone cannot prove legitimacy, but no phishing evidence is shown.'},
    {from:'Payroll <payroll@brightworks-benefits.example>',subject:'Private salary correction',body:'Reply with your password and employee number so we can issue today’s corrected payment.',link:null,answer:'phishing',why:'A password request is never appropriate, and secrecy plus payment pressure increases concern.'},
    {from:'ParcelWay <update@parcelway.example>',subject:'Delivery scheduled',body:'Your parcel is scheduled for tomorrow. Track it using the reference already in your ParcelWay app.',link:null,answer:'legitimate',why:'It does not include a link, fee request, or demand for data. Confirm in the official app if the parcel is unexpected.'},
    {from:'Mina, Finance <mina.finance@executive-mail.example>',subject:'Need this kept confidential',body:'Buy six gift cards immediately and send the codes before my meeting ends.',link:null,answer:'phishing',why:'Executive impersonation, secrecy, gift cards, and urgency are classic payment-fraud signals. Verify through a known channel.'}
  ],
  urls:[
    {url:'https://accounts.example.com/settings',answer:'safe',why:'The host is accounts.example.com and the registrable domain is example.com. In training, it represents the expected organization.'},
    {url:'https://accounts.example.com.attacker.example/login',answer:'suspicious',why:'The registrable domain is attacker.example. “accounts.example.com” is only a misleading subdomain.'},
    {url:'https://support-example.com.example/reset',answer:'suspicious',why:'The registrable domain is com.example; the trusted-looking text appears to its left.'},
    {url:'https://portal.example.org/security',answer:'safe',why:'The registrable domain is example.org, with “portal” as a normal subdomain.'},
    {url:'https://example.org.verify-account.example/',answer:'suspicious',why:'The registrable domain is verify-account.example—not example.org.'},
    {url:'https://login.example.net/',answer:'safe',why:'The registrable domain is example.net. HTTPS protects the connection, but context should still be checked.'}
  ],
  scenarios:[
    {title:'IT support countdown',prompt:'A chat claims IT will disable your account in 10 minutes unless you sign in through its link.',options:['Click immediately','Reply and ask if it is real','Contact IT through the official help channel','Forward it to coworkers'],correct:2,why:'Independent verification breaks the attacker’s control of the conversation.'},
    {title:'Executive payment request',prompt:'A leader asks from a new address for a confidential urgent transfer.',options:['Transfer it quietly','Use the approved payment-verification process','Ask for bank details by reply','Send the email to everyone'],correct:1,why:'High-risk financial changes require established, independent approval procedures.'},
    {title:'Delivery fee',prompt:'An unexpected text says a parcel needs a small redelivery fee through a shortened link.',options:['Pay because the amount is small','Open the link only to inspect it','Check orders in the courier’s official app','Reply STOP'],correct:2,why:'The official app lets you verify the claim without using attacker-controlled details.'},
    {title:'Password reset',prompt:'You receive a reset email you did not request.',options:['Use its reset link','Open the official service directly and review security','Ignore every password email','Forward it with the link'],correct:1,why:'An unsolicited reset may signal an attack. Check the account through a known route.'},
    {title:'QR poster',prompt:'A new office poster says “Scan to keep your benefits” and asks for a work login.',options:['Scan and sign in','Photograph it for later','Report it and open the benefits portal independently','Share the QR code with your team'],correct:2,why:'QR codes conceal destinations. Report unexpected authentication prompts and use the known portal.'}
  ]
};
