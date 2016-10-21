/**
 * Created by ZZ on 10/20/16.
 */
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
@Pipe({name: 'calculatePrice'})
export class CalculatePricePipe implements PipeTransform {
    transform(value: number, value1: number): number {
        // let exp = parseFloat(value1);
        return value * value1;
    }
}
