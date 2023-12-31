import _Kshemaka from '@/assets/profile_pictures/Kshemaka.jpg'
import _Miguel from '@/assets/profile_pictures/Miguel.jpg'
import _Melanie from '@/assets/profile_pictures/Melanie_Chan.jpg'
import _Karina from '@/assets/profile_pictures/Karina_Akhmedove.jpg'
import _Paniz from '@/assets/profile_pictures/Paniz_Ghavimi.jpg'
import _Ethan from '@/assets/profile_pictures/Ethan_Rajkumar.jpg'
import _Vivian from '@/assets/profile_pictures/Vivian_Zheng.jpg'
import _Maggie from '@/assets/profile_pictures/Maggie_Wang.jpg'

type Member = {
  image: string
  name: string
  positions: Map<string, string>
  description: string
  major: string
  year: number
}

const Kshemaka: Member = {
  image: _Kshemaka,
  name: 'Kshemaka Gunawardena',
  positions: new Map<string, string>([
    ['Leads', 'Team Captain'],
    ['Wetlab', 'Enzymes'],
    ['Video', 'Modelling'],
    ['CADnano', 'Designer']
  ]),
  major: 'Microbiology and Immunology',
  year: 4,
  description:
    "Hi! I'm one of the co-captains of this powerhouse of a team for this year.\
    When I'm not in meetings or in the lab, trying to think of ways we can win\
    a Nobel Prize, you’ll find me playing tennis or going for a run on some\
    random trail (all while daydreaming about BIOMOD, of course). I am\
    incredibly proud of our team and can’t wait to see all they have to show!\
    Just like DNA origami, we’re going to fold our way into your hearts. "
}

const Miguel: Member = {
  image: _Miguel,
  name: 'Miguel Tsai',
  positions: new Map<string, string>([
    ['Leads', 'Team Captain'],
    ['Wetlab', 'Octahedron'],
    ['Website', 'Graphics'],
    ['CADnano', 'Designer']
  ]),
  major: 'Biochemistry',
  year: 4,
  description:
    'Hi, I am Miguel and I also one of the co-captains for UBC BIOMOD this year.\
    I am very excited to be leading this team amazing team. It is unknown if I\
    have other interests outside of BIOMOD, I eat, live and breathe BIOMOD.  If\
    I could eat my DNA origami , I would. Maybe that is a future BIOMOD\
    project..... Well, I also love playing nintendo games.'
}

const Melanie: Member = {
  image: _Melanie,
  name: 'Melanie Chan',
  positions: new Map<string, string>([
    ['Wetlab', 'Enzymes'],
    ['Website', 'Writer']
  ]),
  major: 'Microbiology and Immunology',
  year: 2,
  description:
    "Melanie is a second year science student studying Microbiology\
  and Immunology. When she isn't invested in reading up on new advancements in\
  DNA technology and all its applications, she enjoys reading science fiction\
  and writing poetry."
}

const Karina: Member = {
  image: _Karina,
  name: 'Karina Akhmedova',
  positions: new Map<string, string>([
    ['Wetlab', 'Enzyme Modelling'],
    ['Finance', 'Administration'],
    ['Video', 'Audio']
  ]),
  major: 'biomedical engineering',
  year: 3,
  description:
    "I'm studying biomedical engineering and am very passionate about\
  stem cell research related to immunology and neurology. Studying these\
  subjects always makes me feel curious and intrigued, but also empty-headed\
  sometimes (you can never know enough!). In my free time, I exercise at the\
  gym, run, and learn to do an arm stand. cool fact: an active lifestyle\
  increases life expectancy. In biomod, I love the community of young and\
  passionate scientists we have, trying to solve modern problems in the field of\
  medicine."
}

const Paniz: Member = {
  image: _Paniz,
  name: 'Paniz Ghavimi',
  positions: new Map<string, string>([
    ['Wetlab', 'Liposome'],
    ['Finance', 'Sponsorships']
  ]),
  major: 'Molecular and Cellular Biology',
  year: 4,
  description:
    'Hiii everyone! My name is Paniz, and I am an incoming\
  fourth-year student in the Faculty of Science with a major focus on Molecular\
  and Cellular Biology. I am a member of the Wet Lab Team, where I help with\
  designing projects and performing experiments. In my free time, I enjoy\
  kayaking, playing tennis, and discovering new ice cream flavours with\
  friends!'
}

const Ethan: Member = {
  image: _Ethan,
  name: 'Ethan Rajkumar',
  positions: new Map<string, string>([
    ['Wetlab', 'Octahedron'],
    ['CADnano', 'Modelling'],
    ['Website', 'Developer'],
    ['Finance', 'Sponsorships']
  ]),
  major: 'Chemistry and Statistics',
  year: 4,
  description:
    "The man, the myth the legend. He is in Chemistry and Statistics\
  here at UBC. He is the man you send if you need a computational job done\
  right. He's also 99% certain that he has broken the website with his lacking\
  php skills."
}

const Vivian: Member = {
  image: _Vivian,
  name: 'Vivian Zheng',
  positions: new Map<string, string>([
    ['Wetlab', 'Liposome'],
    ['Website', 'Writer'],
    ['Finance', 'Administration']
  ]),
  major: 'CAPS',
  year: 3,
  description:
    "Hi! I'm a 3rd year CAPS major, and part of the wet lab team in\
  BIOMOD. This will be my third year in BIOMOD, and originally joined back in my\
  first year because I was really interested by the previous years' work and\
  wanted to contribute towards develop exciting projects in nanotech! In my\
  spare, I love to play badminton, go cafe hopping and hiking!"
}

const Maggie: Member = {
  image: _Maggie,
  name: 'Maggie Wang',
  positions: new Map<string, string>([
    ['Wetlab', 'Enzymes'],
    ['Finance', 'Sponsorships'],
    ['Video', 'Animation']
  ]),
  major: 'Biomedical Engineering',
  year: 3,
  description:
    'Hi, I’m Maggie! I am a third year biomedical engineering student\
  and the finance team lead at UBC BIOMOD. I’m interested in 3D printing,\
  quantum physics, and microbiology. In my free time, I like to read, watch bad\
  reality TV, and go on hikes. My favourite book that I’ve read this year is\
  Breasts and Eggs by Mieko Kawakami.'
}

const teams: string[] = ['All', 'Leads', 'CADnano', 'Wetlab', 'Finance', 'Website', 'Video']
const members: Map<string, Member[]> = new Map<string, Member[]>([
  ['All', [Kshemaka, Miguel, Ethan, Melanie, Karina, Paniz, Vivian, Maggie]],
  ['Leads', [Kshemaka, Miguel]],
  ['CADnano', [Kshemaka, Miguel, Ethan]],
  ['Wetlab', [Miguel, Kshemaka, Melanie, Karina, Paniz, Ethan, Vivian, Maggie]],
  ['Finance', [Karina, Paniz, Ethan, Vivian, Maggie]],
  ['Website', [Miguel, Melanie, Ethan, Vivian]],
  ['Video', [Kshemaka, Karina, Maggie]]
])

export type { Member }
export { teams, members }
