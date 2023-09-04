import {renderHook, act} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should retrieve default value when local storage key does not exist', () => {
    const {result} = renderHook(() => useLocalStorage('key', 'default'));

    const [value] = result.current;
    expect(value).toBe('default');
  });

  it('should retrieve value from local storage when key exists', () => {
    localStorage.setItem('key', JSON.stringify('value'));
    const {result} = renderHook(() => useLocalStorage('key', 'default'));

    const [value] = result.current;
    expect(value).toBe('value');
  });

  it('should set local storage when value changes', () => {
    const {result} = renderHook(() => useLocalStorage('key', 'default'));

    act(() => {
      const setValue = result.current[1];
      setValue('new value');
    });

    expect(localStorage.getItem('key')).toBe(JSON.stringify('new value'));
  });

  it('should return updated value when setting new value', () => {
    const {result} = renderHook(() => useLocalStorage('key', 'default'));

    act(() => {
      const setValue = result.current[1];
      setValue('new value');
    });

    const [value] = result.current;
    expect(value).toBe('new value');
  });

  it('should handle JSON parsing error', () => {
    localStorage.setItem('key', 'invalid JSON');
    const {result} = renderHook(() => useLocalStorage('key', 'default'));

    const [value] = result.current;
    expect(value).toBe('default');
  });
});
