import {fetchData} from './promise.js'
import {restAndSpread} from './rest-spread.js'
import {destructuring} from './destructuring.js'
import {findAndFindIndex} from './find-findindex.js'
import {concat} from './concat.js'
import {sliceAndSplice} from './slice-splice.js'
import {mapAndFilter} from './map-filter.js'

/* MAP and FILTER */
mapAndFilter()

/* SLICE and SPLICE */
sliceAndSplice()

/* CONCAT */
concat()

/* FIND and FINDINDEX */
findAndFindIndex()

/* DESTRUCTURING */
destructuring()

/* REST and SPREAD operator */
restAndSpread()

/* PROMISE */
fetchData().then(r => console.log(r))
