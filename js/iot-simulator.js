/**
 * IoT Telemetry Dynamic Live Data Simulator
 */
class IoTSimulator {
    constructor() {
        this.doElem = document.getElementById('val-do');
        this.tempElem = document.getElementById('val-temp');
        this.phElem = document.getElementById('val-ph');
        this.nh3Elem = document.getElementById('val-nh3');
    }

    init() {
        if (!this.doElem) return;
        setInterval(() => this.updateMetrics(), 3500);
    }

    updateMetrics() {
        // Generate slight subtle fluctuations
        const randomDO = (6.5 + Math.random() * 0.5).toFixed(1);
        const randomTemp = (27.0 + Math.random() * 0.8).toFixed(1);
        const randomPH = (7.1 + Math.random() * 0.2).toFixed(1);
        const randomNH3 = (0.01 + Math.random() * 0.02).toFixed(2);

        this.doElem.innerHTML = `${randomDO} <small>mg/L</small>`;
        this.tempElem.innerHTML = `${randomTemp} <small>°C</small>`;
        this.phElem.innerHTML = `${randomPH}`;
        this.nh3Elem.innerHTML = `${randomNH3} <small>ppm</small>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const iot = new IoTSimulator();
    iot.init();
});