// Bewerk hier de tegels. Kopieer een item om een link toe te voegen.
// Laat url leeg als het adres ontbreekt. Gebruik logo voor een lokaal bestand uit icons/.
const linkGroups = [
  {
    title: 'Mijn Blackboard-vakken',
    size: 'courses',
    links: [
      { name: 'Networks 1', icon: 'network', color: 'mint', url: 'https://blackboard.pxl.be/ultra/courses/_65586_1/outline' },
      { name: 'Windows Essentials', logo: 'icons/windows-11.png', color: 'blue', url: 'https://blackboard.pxl.be/ultra/courses/_65587_1/outline' },
      { name: 'Linux Essentials', logo: 'icons/linux.png', color: 'mint', url: 'https://blackboard.pxl.be/ultra/courses/_65588_1/outline' },
      { name: 'Communication Skills 1', icon: 'chat', color: 'violet', url: 'https://blackboard.pxl.be/ultra/courses/_68947_1/outline' },
      { name: 'Werkplekleren 1', icon: 'briefcase', color: 'orange', url: 'https://blackboard.pxl.be/ultra/courses/_65590_1/outline' },
      { name: 'IT Organisation 1', icon: 'server', color: 'sky', url: 'https://blackboard.pxl.be/ultra/courses/_65596_1/outline' },
    ],
  },
  {
    title: 'Algemeen school',
    links: [
      { name: 'Blackboard PXL', description: 'Cursussen en opdrachten', logo: 'icons/pxl.png', color: 'neutral', url: 'https://blackboard.pxl.be/ultra/course' },
      { name: 'Lessenrooster', description: 'Jouw rooster in TimeEdit', logo: 'icons/timeedit.png', color: 'mint', url: 'https://cloud.timeedit.net/be_pxl/web/stud/ri1Y5vYyQ7f708QYZ5Q7843XZ10Q5.html' },
      { name: 'Outlook', description: 'Schoolmail en agenda', logo: 'icons/microsoft-outlook.png', color: 'blue', url: 'https://outlook.cloud.microsoft/mail/' },
      { name: 'Teams Cloud', description: 'Chats en vergaderingen', logo: 'icons/microsoft-teams.png', color: 'violet', url: 'https://teams.cloud.microsoft/' },
      { name: 'Academic Software', description: 'Software en licenties', logo: 'icons/academic-software.png', color: 'pink', url: 'https://portal.academicsoftware.com/login' },
    ],
  },
  {
    title: 'Windows en Microsoft-beheer',
    links: [
      { name: 'Microsoft Intune', description: 'Apparaten beheren', logo: 'icons/microsoft-intune.png', color: 'blue', url: 'https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/overview' },
      { name: 'Microsoft Entra', description: 'Gebruikers en groepen beheren', logo: 'icons/entra-id.png', color: 'blue', url: 'https://entra.microsoft.com/' },
      { name: 'Microsoft Azure', description: 'Cloudresources beheren', logo: 'icons/microsoft-azure.png', color: 'sky', url: 'https://portal.azure.com/' },
      { name: 'Microsoft 365-beheercentrum', description: 'Abonnementen en instellingen', logo: 'icons/microsoft-365-admin-center.png', color: 'neutral', url: 'https://admin.cloud.microsoft/#/homepage' },
    ],
  },
  {
    title: 'Ontwikkeltools',
    size: 'half',
    links: [
      { name: 'Visual Studio Subscriptions', description: 'Abonnementen en downloads', logo: 'icons/microsoft.png', color: 'neutral', url: 'https://my.visualstudio.com/?auth_redirect=true' },
      { name: 'GitHub', description: 'Repositories en projecten', logo: 'icons/github-light.png', color: 'neutral', url: 'https://github.com/' },
    ],
  },
  {
    title: 'Overige snelkoppelingen',
    size: 'half',
    links: [
      { name: 'ChatGPT', logo: 'icons/chatgpt.png', color: 'mint', url: 'https://chatgpt.com/' },
      { name: 'Gmail', logo: 'icons/gmail.png', color: 'neutral', url: 'https://mail.google.com/mail/u/0/#inbox' },
      { name: 'Dashboard Homelab', description: 'Op je thuisnetwerk', icon: 'home', color: 'mint', url: 'http://192.168.0.209/' },
    ],
  },
];
