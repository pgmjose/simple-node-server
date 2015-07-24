function initialize(){
	var p = document.createElement('p');
	p.innerHTML = "Email is an important communications service available on the Internet. The concept of sending electronic text messages between parties in a way analogous to mailing letters or memos predates the creation of the Internet. Pictures, documents and other files are sent as email attachments. Emails can be cc-ed to multiple email addresses.";
	document.getElementById('one').appendChild(p);
	var p0 = document.createElement('p');
	p0.innerHTML = "Email has often been called the killer application of the Internet. It predates the Internet and was a crucial tool in creating it. Email started in 1965 as a way for multiple users of a time-sharing mainframe computer to communicate. Although the history is undocumented, among the first systems to have such a facility were the System Development Corporation (SDC) Q32 and the Compatible Time-Sharing System (CTSS) at MIT.";
	document.getElementById('one').appendChild(p0);
	
	var p2 = document.createElement('p');
	p2.innerHTML = "The ARPANET computer network made a large contribution to the evolution of electronic mail. An experimental inter-system transferred mail on the ARPANET shortly after its creation. In 1971 Ray Tomlinson created what was to become the standard Internet electronic mail addressing format, using the @ sign to separate mailbox names from host names.";
	document.getElementById('two').appendChild(p2);
	
	var p3 = document.createElement('p');
	p3.innerHTML = "A number of protocols were developed to deliver messages among groups of time-sharing computers over alternative transmission systems, such as UUCP and IBM's VNET email system. Email could be passed this way between a number of networks, including ARPANET, BITNET and NSFNET, as well as to hosts connected directly to other sites via UUCP. See the history of SMTP protocol.";
	document.getElementById('three').appendChild(p3);
	var p4 = document.createElement('p');
	p4.innerHTML = "In addition, UUCP allowed the publication of text files that could be read by many others. The News software developed by Steve Daniel and Tom Truscott in 1979 was used to distribute news and bulletin board-like messages. This quickly grew into discussion groups, known as newsgroups, on a wide range of topics. On ARPANET and NSFNET similar discussion groups would form via mailing lists, discussing both technical issues and more culturally focused topics (such as science fiction, discussed on the sflovers mailing list).";
	document.getElementById('three').appendChild(p4);
	
	var p5 = document.createElement('p');
	p5.innerHTML = "During the early years of the Internet, email and similar mechanisms were also fundamental to allow people to access resources that were not available due to the absence of online connectivity. UUCP was often used to distribute files using the 'alt.binary' groups. Also, FTP e-mail gateways allowed people that lived outside the US and Europe to download files using ftp commands written inside email messages. The file was encoded, broken in pieces and sent by email; the receiver had to reassemble and decode it later, and it was the only way for people living overseas to download items such as the earlier Linux versions using the slow dial-up connections available at the time. After the popularization of the Web and the HTTP protocol such tools were slowly abandoned.";
	document.getElementById('four').appendChild(p5);
}