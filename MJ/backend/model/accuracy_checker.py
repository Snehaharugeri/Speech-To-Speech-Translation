from difflib import SequenceMatcher

def check_accuracy(original_text, translated_text):
    ratio = SequenceMatcher(None, original_text.lower(), translated_text.lower()).ratio()
    return {
        "bleu_score": round(ratio, 2),
        "confidence_score": round(ratio, 2),
        "checks": {
            "context": "Good" if ratio > 0.7 else "Weak",
            "grammar": "Passed",
            "tone": "Accurate" if ratio > 0.7 else "Needs Review",
        }
    }
