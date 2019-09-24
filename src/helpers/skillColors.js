export default function getColor(skill){
    const colorArray = [ 
        {
            skill: 'vue',
            color: '#4BB583'
        },
        {
            skill: 'node',
            color: '#87C000'
        },
        {
            skill: 'firebase',
            color: '#F8C429'
        },
        {
            skill: 'css',
            color: '#2965F1'
        },
        {
            skill:'socket',
            color: '#010101'
        }
    ]
    return colorArray
        .find(sk=>sk.skill===skill).color
}