export const API_KEY = process.env.API_KEY
export const ENDPOINT = process.env.ENDPOINT
export const ENDPOINT_DISCOVER = ENDPOINT+'/discover/movie/?api_key='+API_KEY+'&sort_by=vote_count.desc'
export const ENDPOINT_SEARCH = ENDPOINT+'/search/movie/?api_key='+API_KEY
