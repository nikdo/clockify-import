import config from './config.json'

export default tags => {
    if (tags.includes('dev')) {
        return config.clockify.tasks.Development
    }
    else if (tags.includes('ux')) {
        return config.clockify.tasks.Design
    }
    return config.clockify.tasks["Non-development"]
}