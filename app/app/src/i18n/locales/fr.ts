import type { I18n, Diff } from '../type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
	'A platform that allows you to place pixels throughout the year to make a final fresco like the r/place of reddit but in our own way.':
		'Une plateforme vous permettant de poser tout au long de l\'année des pixels pour faire une fresque finale comme le r/place de reddit mais à notre sauce.',
	'So, if you are in love with pixel art, see you in 2024!':
		'Alors, si vous êtes amoureux du pixel art, rendez vous en 2024 !',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>
