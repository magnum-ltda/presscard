import { Component, Input, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-percentage-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="input-wrapper" [class.disabled]="disabled" (click)="focusInput()">
      <span class="prefix" *ngIf="mode === 'FIXED'">R$</span>
      <input
        #inputElement
        type="text"
        inputmode="numeric"
        class="custom-input"
        [value]="displayValue"
        (keydown)="onKeyDown($event)"
        (paste)="$event.preventDefault()"
        [disabled]="disabled"
        (blur)="onTouched()"
      />
      <span class="suffix" *ngIf="mode === 'PERCENTAGE'">%</span>
    </div>
  `,
  styleUrls: ['./currency-percentage-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurrencyPercentageInputComponent),
      multi: true
    }
  ]
})
export class CurrencyPercentageInputComponent implements ControlValueAccessor {
  @Input() mode: 'PERCENTAGE' | 'FIXED' = 'PERCENTAGE';
  @Input() maxLimit?: number;

  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

  disabled = false;
  private innerValue: number = 0;
  displayValue: string = '0,00';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this.innerValue = typeof value === 'number' ? value : parseFloat(value) || 0;
      this.updateDisplay();
    } else {
      this.innerValue = 0;
      this.updateDisplay();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  focusInput() {
    if (!this.disabled && this.inputElement) {
      this.inputElement.nativeElement.focus();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (allowedKeys.includes(event.key)) {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        this.handleDelete();
      }
      return;
    }

    if (/\d/.test(event.key)) {
      event.preventDefault();
      this.handleInput(event.key);
    } else {
      event.preventDefault();
    }
  }

  private handleInput(digit: string) {
    const input = this.inputElement.nativeElement;
    
    // If there is selected text, just clear the value first
    if (input.selectionStart !== input.selectionEnd) {
      this.innerValue = 0;
    }

    // Current value as string representing cents without commas
    const currentValueStr = Math.round(this.innerValue * 100).toString();
    const newValueStr = currentValueStr + digit;
    let newValue = parseInt(newValueStr, 10) / 100;

    const limit = this.maxLimit !== undefined ? this.maxLimit : (this.mode === 'PERCENTAGE' ? 99.99 : 999.99);

    if (newValue > limit) {
      newValue = limit;
    }

    this.innerValue = newValue;
    this.updateDisplay();
    this.onChange(this.innerValue);
  }

  private handleDelete() {
    const input = this.inputElement.nativeElement;
    
    if (input.selectionStart !== input.selectionEnd) {
      // If text is selected, just clear it to 0
      this.innerValue = 0;
    } else {
      const currentValueStr = Math.round(this.innerValue * 100).toString();
      if (currentValueStr.length <= 1 || this.innerValue === 0) {
        this.innerValue = 0;
      } else {
        const newValueStr = currentValueStr.slice(0, -1);
        this.innerValue = parseInt(newValueStr, 10) / 100;
      }
    }
    
    this.updateDisplay();
    this.onChange(this.innerValue);
  }

  private updateDisplay() {
    this.displayValue = this.innerValue.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}
