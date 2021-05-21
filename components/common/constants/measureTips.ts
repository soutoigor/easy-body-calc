import height from '@/assets/images/height.jpg'
import weight from '@/assets/images/weight.jpg'
import hip from '@/assets/images/hip.jpg'
import neck from '@/assets/images/neck.jpg'
import abdomen from '@/assets/images/abdomen.jpg'

export const measureTips = {
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
}
