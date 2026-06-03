import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

const CHANNELS = [
  { name: 'JAV BURMA', link: 'https://t.me/javburma' },
  { name: 'JAV BURMA (2)', link: 'https://t.me/javburmatwo' },
  { name: 'JAV BURMA (3)', link: 'https://t.me/javburmathree' },
  { name: 'JAV BURMA CHANNEL', link: 'https://t.me/JavBurmaChannel' },
  { name: 'JAV BURMA (5)', link: 'https://t.me/javburmafive' },
  { name: 'JAV BURMABOARD', link: 'https://t.me/javburmaboard' },
  { name: 'JAV BURMA MILF', link: 'https://t.me/+gqaoDbKljvM2ZDM9' },
  { name: 'JAV TV', link: 'https://t.me/japanesemovieTv' },
  { name: 'MMSUB JAV 01', link: 'https://t.me/mmsubjav01' },
  { name: 'MMSUB JAV 03', link: 'https://t.me/mmsubjav03' },
  { name: 'JPXTV', link: 'https://t.me/JPXTV' },
  { name: 'JPXTV 2', link: 'https://t.me/jpxtvtwo' },
  { name: 'JPXTV 3', link: 'https://t.me/JPXTV03' },
  { name: 'JPX MOVIES', link: 'https://t.me/jpxmovies' },
  { name: 'REDX TV', link: 'https://t.me/redxtv' },
  { name: 'REDX TV (2)', link: 'https://t.me/redxtv02' },
  { name: 'JAV MMSUBS', link: 'https://t.me/javmmsubs' },
  { name: 'MYANMAR HD I', link: 'https://t.me/myanmarhdi' },
  { name: 'MYANMAR HD FREELINK', link: 'https://t.me/myanmarhdfreelink' },
  { name: 'XMOVIE PLUS', link: 'https://t.me/xmovieplusfree' },
  { name: 'XMOVIE PLEX', link: 'https://t.me/xmovieplex' },
  { name: 'ACTION CAR MMSUB', link: 'https://t.me/actioncar_mmsub' },
  { name: 'JAV 959', link: 'https://t.me/jav959' },
  { name: 'MMSUB 1821', link: 'https://t.me/mmsub_1821' },
  { name: 'JAV MMSUB 01', link: 'https://t.me/+-SXSzW5JsQ02Y2E1' },
  { name: 'JAV MMSUB 02', link: 'https://t.me/+r1QeigJbGTw4NWJl' },
  { name: 'JAV MMSUB 03', link: 'https://t.me/+jiF-7k04uLhjOGRl' },
  { name: 'JAV MMSUB 04', link: 'https://t.me/+Z6hP5dkg0fM5Mjg1' },
  { name: 'JAV MMSUB 05', link: 'https://t.me/+yWtOvdNB0NoyMTll' },
  { name: 'DARKFLIX', link: 'https://t.me/+knN9NUBubpI5Zjhl' },
  { name: 'VIVAMAX BURMA', link: 'https://t.me/vivamaxburma' },
  { name: 'စာတန်းထိုးကားများ', link: 'https://t.me/c/2014477597/2979' },
  { name: 'TELEMOVIE BURMA', link: 'https://t.me/telemovieBurma' },
  { name: 'ACADEMY', link: 'https://t.me/AcademyMMmovies' },
  { name: 'VELVET STREAM', link: 'https://t.me/+RmSstqlK8GBjNTc1' },
  { name: 'PRIME VIBE', link: 'https://t.me/+RpLwUz3QiGA1NmZl' }
];

const ADMIN_INFO = "Payment: 09258003137 (Wave/KPAY), 09880598667 (WAVE/AYA). Admins: HEIN HTET (@HEINHTET3701), AWNG KAUNG SEK (@AWNGKAUNGSEK), YH (@YH3701)";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = await streamText({
    model: openai('gpt-4o'),
    system: `မင်းဟာ Yangon TV ရဲ့ အဆင့်မြင့် Premium AI Assistant ဖြစ်တယ်။ 
    ချန်နယ်များ: ${JSON.stringify(CHANNELS)}
    Admin နှင့် ငွေပေးချေမှု: ${ADMIN_INFO}
    ဒီအချက်အလက်တွေကိုပဲ အခြေခံပြီး တိကျစွာ ဖြေပေးပါ။`,
    messages,
  });
  return result.toDataStreamResponse();
}
