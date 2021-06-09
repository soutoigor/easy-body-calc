import height from '@/assets/images/height.jpg'
import weight from '@/assets/images/weight.jpg'
import hip from '@/assets/images/hip.jpg'
import neck from '@/assets/images/neck.jpg'
import abdomen from '@/assets/images/abdomen.jpg'
import activities from '@/assets/images/activities.jpg'

export const MEASURE_TIPS = {
  HEIGHT: {
    TITLE: 'Height',
    IMAGE: height,
    DESCRIPTION: `
      With a measuring tape or a ruler, measure your height in centimeters,
      keep your legs together, your body straight and your head centralized.
    `,
  },
  WEIGHT: {
    TITLE: 'Weight',
    IMAGE: weight,
    DESCRIPTION: `
      Check your weight with a scale, preferably in fasting and with underwear.
    `,
  },
  HIP: {
    TITLE: 'Hip',
    IMAGE: hip,
    DESCRIPTION: `
      With a measuring tape, contour the biggest part of your hip and get the centimeters.
    `,
  },
  NECK: {
    TITLE: 'Neck',
    IMAGE: neck,
    DESCRIPTION: `
      With a measuring tape, contour your neck like a necktie, above the trapezius,
      but careful to not take the trapezius in consideration.
    `,
  },
  ABDOMEN: {
    TITLE: 'Abdomen',
    IMAGE: abdomen,
    DESCRIPTION: `
      Exhale all the air, but don't force the abdomen. And with a measuring tape, contour
      your waist right above your belly.
    `,
  },
  ACTIVITIES: {
    TITLE: 'Daily activities',
    IMAGE: activities,
    DESCRIPTION: `
      • Sedentary: No daily exercise and stay seated most of the day <br />
      • Slightly active: Light exercise 1-3 times/week and stay seated most of the day <br />
      • Moderately active: Intense/moderate exercise 3-5 times/week and stay seated most of the day <br />
      • Active: Intense/moderate exercise 3-5 times/week and stands most of the day <br />
      • Very active: Intense exercise 5-7 times/week and stands most of the day <br />
    `,
  },
}
