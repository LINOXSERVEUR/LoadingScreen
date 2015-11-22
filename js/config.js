/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "LinoX";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/bluefall.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/image1.png"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 55;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "MYfGok2ZkPM", name: "Trap Remixes of Popular Songs July & August 2015 #2 Festival Trap Mix Summer 2015"},
	{youtube: "NwSJBVgfnuA", name: "Best Remixes of Popular Songs [January 2015] [Happy New Year!] [EDM Mix]"},
	{youtube: "S_a3KPcoOng", name: "Best Remixes of Popular Songs [May 2015] [Dubstep] [House] [EDM]"},
	{youtube: "FjNdYp2gXRY", name: "Ahrix - Nova [NCS Release]"},
	{youtube: "1jre6_FBBc0", name: "Kid Cudi - Pursuit of Happiness (Steve Aoki Remix) - Project X (Official Music Video)"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 13;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Bienvenue sur LinoX",
"Créé par LinoX, développé par Nick Luong",
"LinoX Multi-Gaming | La meilleure communauté multigaming francophone",
"Nous saurons satisfaire vos envies!",
"Notre serveur Garry's Mod francophone est prêt à vous accueillir! Nos ajouts personnalisés sauront satisfaire vos envies de roleplay!",
"Des questions? Notre TeamSpeak3: ts.linox.org",
"En cas de troll, venez sur notre teamspeak: ts.linox.org",
"Nous sommes ouvert à tout idées venant de vous",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 4500;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 750;