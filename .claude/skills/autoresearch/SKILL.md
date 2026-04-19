---
name: autoresearch
description: Run Karpathy's autoresearch on GPU-enabled device for any AI research task
homepage: https://github.com/karpathy/autoresearch
metadata:
  {
    "openclaw":
      {
        "emoji": "🔬",
        "requires": { "bins": ["python3", "pip", "git", "nvidia-smi"] },
        "commands": ["/autoresearch"],
        "install": [],
      },
  }
---

# AutoResearch Skill

Run Karpathy's autonomous AI research agent on your GPU-enabled device for any research task.

## What is AutoResearch?

An autonomous AI agent that:
1. Modifies code/experiments
2. Runs training/experiments for a set time
3. Evaluates results
4. Keeps or discards changes
5. Repeats autonomously

You wake up to a log of experiments and (hopefully) better results!

## Prerequisites (GPU Device Required)

- NVIDIA GPU with CUDA support
- Python 3.10+
- CUDA toolkit installed
- Git
- OpenAI API key

## Quick Start on GPU Device

### 1. Clone and Install

```bash
git clone https://github.com/karpathy/autoresearch.git ~/autoresearch
cd ~/autoresearch
pip install -e .
# OR: uv pip install -e .
```

### 2. Run Prepare (One-time)

```bash
cd ~/autoresearch
python prepare.py
```

### 3. Create Your Research Program

Edit `~/autoresearch/program.md` with your research goals:

```markdown
# My Research Program

## Goal
[Describe what you want to research]

## Approach
[How should the AI approach this?]

## Success Criteria
[How to evaluate if changes are good?]

## Constraints
[Any limitations or requirements]
```

### 4. Start Research

```bash
cd ~/autoresearch
export OPENAI_API_KEY=sk-...
python train.py
```

## Example Research Programs

### Example 1: InstallPilot Architecture
```markdown
# InstallPilot Architecture Research

## Goal
Design architecture for handling diverse tool types (apps, CLI, skills)

## Approach
- Analyze different package managers
- Design runtime detection system
- Create tool taxonomy

## Success Criteria
- Accurate repo classification
- Correct installation strategies
- Cross-platform support
```

### Example 2: Code Optimization
```markdown
# Algorithm Optimization Research

## Goal
Optimize sorting algorithm for large datasets

## Approach
- Try different algorithms
- Benchmark against baseline
- Profile and optimize bottlenecks

## Success Criteria
- Faster than baseline
- Memory efficient
- Stable results
```

### Example 3: Model Architecture
```markdown
# Neural Network Architecture Search

## Goal
Find optimal transformer variant for text classification

## Approach
- Modify attention mechanisms
- Try different layer configurations
- Test on validation set

## Success Criteria
- Higher accuracy than baseline
- Reasonable training time
- Good generalization
```

## Monitoring

### Check Status
```bash
ps aux | grep train.py
nvidia-smi  # GPU usage
```

### View Logs
```bash
tail -f ~/autoresearch/logs/*.txt
```

### View Progress
```bash
eog ~/autoresearch/progress.png  # Linux
open ~/autoresearch/progress.png # macOS
```

## Files

- `autoresearch.js` - Skill script
- `run.sh` - Wrapper
- `SKILL.md` - This documentation

## Location

`~/.openclaw/workspace/skills/autoresearch/`
