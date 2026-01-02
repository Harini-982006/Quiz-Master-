
class AudioService {
  private audioCtx: AudioContext | null = null;

  private init() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  public playSuccess() {
    this.init();
    this.playTone(523.25, 'sine', 0.1); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.15), 100); // E5
  }

  public playError() {
    this.init();
    this.playTone(220, 'square', 0.2); // A3
  }

  private playTone(freq: number, type: OscillatorType, duration: number) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + duration);
  }
}

export const audioService = new AudioService();
