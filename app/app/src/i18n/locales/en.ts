const defaultLocale =
[
	'What is {0}?',
	'Visit our website',
	'Join our Discord',
	'A platform that allows you to place pixels throughout the year to make a final fresco like the r/place of reddit but in our own way.',
	'So, if you are in love with pixel art, see you in 2024!',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Type>((acc, key) =>
		{
			(acc as any)[key] = key
			return acc
		},
		{} as Type,
	)

export default locale as Readonly<typeof locale>
