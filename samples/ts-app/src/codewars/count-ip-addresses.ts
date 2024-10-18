function ipToInt(ip: string): number {
    return ip.split('.').reduce((x, y) => (x << 8) + parseInt(y), 0);
}

export function ipsBetween(start: string, end: string): number {
    return ipToInt(end) - ipToInt(start);
}

(() => {
    console.log(ipsBetween('10.0.0.0', '10.0.0.50')); // 50
    console.log(ipsBetween('20.0.0.10', '20.0.1.0')); // 246
    console.log(ipsBetween('0.0.0.0', '255.255.255.255')); // 4294967295
    console.log(ipsBetween('148.70.97.7', '2.98.232.220')); // 1847363541
})();
